package com.app.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DaywiseOrderDao;
import com.app.dao.OrderDao;
import com.app.dao.TiffinDetailDao;
import com.app.dao.UserAddressDao;
import com.app.dao.UserDao;
import com.app.dtos.ActiveUsers;
import com.app.dtos.AssignDeliveryBoy;
import com.app.dtos.DaywiseOrderDto;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.OrderTiffinDetailsDto;
import com.app.dtos.UserDto;
import com.app.entities.DaywiseOrder;
import com.app.entities.Order;
import com.app.entities.TiffinDetail;
import com.app.entities.User;
import com.app.entities.UserAddress;

@Service
@Transactional
public class DaywiseOrderService {

	@Autowired
	DaywiseOrderDao daywiseOrderDao;
	@Autowired
	DtoEntityConverter converter;
	@Autowired
	private OrderDao orderdao;
	@Autowired
	private UserDao userdao;
	@Autowired
	private TiffinDetailDao tiffindao;
	@Autowired
	private UserAddressDao userAddressdao;

	public DaywiseOrderDto findByDoId(int doId) {
		DaywiseOrder dayWiseOrder = daywiseOrderDao.findByDoId(doId);
		System.out.println(converter.toDaywiseOrderDto(dayWiseOrder));
		return converter.toDaywiseOrderDto(dayWiseOrder);
	}

	public DaywiseOrderDto addDaywise(DaywiseOrderDto daywiseorderDto) {
		DaywiseOrder daywiseOrder = converter.dayWiseOrderDTOtoDayWiseOrder(daywiseorderDto);
		daywiseOrderDao.save(daywiseOrder);
		return converter.toDaywiseOrderDto(daywiseOrder);
	}

	public List<DaywiseOrderDto> GetALLOrders() {
		List<DaywiseOrder> dayw = daywiseOrderDao.findAll();
		List<DaywiseOrderDto> x = new ArrayList<>();
		for (DaywiseOrder d : dayw) {
			System.out.println(d.getOrder().getUser().getAadharNo());
			x.add(converter.toDaywiseOrderDto(d));
		}
		return x;
	}

	public List<DaywiseOrderDto> addDaywiseOrder() throws ParseException {
		List<Order> orders = orderdao.findAll();
		List<DaywiseOrderDto> daywisedtolist = new ArrayList<DaywiseOrderDto>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dateWithoutTime = sdf.parse(sdf.format(new Date()));
		System.out.println(dateWithoutTime);
		List<DaywiseOrder> oldDois = daywiseOrderDao.findByDateLessThan(dateWithoutTime);
		System.out.println("Before today DOI : "+oldDois);
		daywiseOrderDao.deleteAll(oldDois);	
		
		List<DaywiseOrder> findAll = daywiseOrderDao.findAll();
		System.out.println("Todays old doi "+findAll);
		HashSet<DaywiseOrder> allDayWiseOrders=new HashSet<>(findAll);

		for (Order o : orders) {
			
			Date date = new Date();
			System.out.println(date);
			
			if(!(o.getStartDate().compareTo(date)>1)) {
				if (o.getEndDate().compareTo(date) >= 1) {
					DaywiseOrder dwo=new DaywiseOrder(date, 1, "pending", o,null);
					if(!allDayWiseOrders.contains(dwo)) {
						dwo=daywiseOrderDao.save(dwo);
						System.out.println("new DOI : "+dwo);
						
						allDayWiseOrders.add(dwo);
					}
				}
			}
		}
		for(DaywiseOrder dayO : allDayWiseOrders ) {
			daywisedtolist.add(converter.toDaywiseOrderDto(dayO));
		}
		return daywisedtolist;
	}

	public List<OrderTiffinDetailsDto> Countpending() {
//	long count=daywiseOrderDao.count();
		List<DaywiseOrder> x = daywiseOrderDao.findAll();
		HashMap<Integer, Integer> count = new HashMap<>();
		for (DaywiseOrder d : x) {
			System.out.println(d.getStatus());
			if (d.getStatus().equals("pending")) {
				Order o = d.getOrder();
				int tiffin_id = o.getTiffinDetails().getTiffinId();
				count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
			}
		}
		List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
		for (Integer i : count.keySet()) {
			int c = count.get(i);
			TiffinDetail t = tiffindao.findByTiffinId(i);
			OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
			list.add(ot);
		}
		System.out.println(list);
		return list;
	}

	public List<OrderTiffinDetailsDto> CountDispatched() {
//	long count=daywiseOrderDao.count();
		List<DaywiseOrder> x = daywiseOrderDao.findAll();
		HashMap<Integer, Integer> count = new HashMap<>();

		for (DaywiseOrder d : x) {
			System.out.println(d.getStatus());
			if (d.getStatus().equals("dispatched")) {
				Order o = d.getOrder();
				int tiffin_id = o.getTiffinDetails().getTiffinId();
				count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
			}

		}
		List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
		for (Integer i : count.keySet()) {
			int c = count.get(i);
			TiffinDetail t = tiffindao.findByTiffinId(i);
			OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
			list.add(ot);
		}

		System.out.println(list);

		return list;
	}

	public List<AssignDeliveryBoy> TotaltodaysPendingOrderList() {

		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("pending")) {
				UserAddress ud = userAddressdao.findByUserId(d.getOrder().getUser().getUserId());

				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(), d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(), ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(), ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
//	System.out.println(assignd);
		return assignd;
	}

	public List<UserDto> getDeliveryBoys() {
		List<User> users = userdao.findAll();
		List<UserDto> deliveryBoys = new ArrayList<>();
		for (User u : users) {
			if (u.getRole().equals("ROLE_DELIVERYBOY")) {
				deliveryBoys.add(converter.toUserDto(u));
			}
		}
		return deliveryBoys;
	}

	public String DispatchOrder(String userId, String do_id) {
		int userid = Integer.parseInt(userId);
		int doId = Integer.parseInt(do_id);
		DaywiseOrder d = daywiseOrderDao.findByDoId(doId);

		d.setDeliveryBoy(userdao.findByUserId(userid));
		d.setStatus("dispatched");
		daywiseOrderDao.save(d);
		return "successfully done";
	}

	public List<AssignDeliveryBoy> getDeliveryDetailsforDeliveryBoy(int userId) {
		List<DaywiseOrder> dayorders = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> dblist = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : dayorders) {
			if (d.getDeliveryBoy()!=null && d.getDeliveryBoy().getUserId() == userId && d.getStatus().equals("dispatched")) {
				UserAddress ud = userAddressdao.findByUserId(d.getOrder().getUser().getUserId());

				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(), d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(), ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(), ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				dblist.add(a);
			}
		}
		return dblist;

	}

	public int DispatchedToDelivered(int do_id) {
		DaywiseOrder d = daywiseOrderDao.findByDoId(do_id);
		d.setStatus("Delivered");
		return 1;
	}

	public List<AssignDeliveryBoy> TotaltodaysDispatchedOrders() {

		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
//		System.out.println(daywiseorder);
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("dispatched")) {
				UserAddress ud = userAddressdao.findByUserId(d.getOrder().getUser().getUserId());

				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(), d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(), ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(), ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
		System.out.println(assignd);
		return assignd;
	}

	public List<OrderTiffinDetailsDto> CountDelivered() {
//		long count=daywiseOrderDao.count();
		List<DaywiseOrder> x = daywiseOrderDao.findAll();
		HashMap<Integer, Integer> count = new HashMap<>();

		for (DaywiseOrder d : x) {
			System.out.println(d.getStatus());
			if (d.getStatus().equals("Delivered")) {
				Order o = d.getOrder();
				int tiffin_id = o.getTiffinDetails().getTiffinId();
				count.put(tiffin_id, count.getOrDefault(tiffin_id, 0) + 1);
			}

		}
		List<OrderTiffinDetailsDto> list = new ArrayList<OrderTiffinDetailsDto>();
		for (Integer i : count.keySet()) {
			int c = count.get(i);
			TiffinDetail t = tiffindao.findByTiffinId(i);
			OrderTiffinDetailsDto ot = new OrderTiffinDetailsDto(t.getTiffinName(), c);
			list.add(ot);
		}

//			System.out.println(list + "   ssja");

		return list;
	}

	public List<AssignDeliveryBoy> TotaltodaysDeliveredOrders() {
		List<DaywiseOrder> daywiseorder = daywiseOrderDao.findAll();
		List<AssignDeliveryBoy> assignd = new ArrayList<AssignDeliveryBoy>();
		for (DaywiseOrder d : daywiseorder) {
			if (d.getStatus().equals("Delivered")) {
				UserAddress ud = userAddressdao.findByUserId(d.getOrder().getUser().getUserId());

				AssignDeliveryBoy a = new AssignDeliveryBoy(d.getDoId(), d.getOrder().getUser().getUserName(),
						d.getOrder().getOrderId(), ud.getAddressLine(), ud.getDeliveryAddress().getDeliveryArea(),
						ud.getDeliveryAddress().getCity(), ud.getDeliveryAddress().getPinCode());
				System.out.println(a.getDo_id());
				assignd.add(a);
			}

		}
		System.out.println(assignd);
		return assignd;
	}

	public List<ActiveUsers> getAllActiveUsers() {
		List<Order> orders = orderdao.findAll();
		List<ActiveUsers> activeusers = new ArrayList<ActiveUsers>();

		for (Order o : orders) {

			Date date = new Date();
			System.out.println(o.getOrderId() + "" + o.getEndDate().compareTo(date));
			if (o.getEndDate().compareTo(date) >= 0) {

				activeusers.add(new ActiveUsers(o.getUser().getUserId(), o.getUser().getUserName(), o.getStartDate(),
						o.getEndDate(), o.getTotalDays(), o.getTotalAmount(), o.getTiffinDetails().getTiffinId()));

			}
		}
		return activeusers;

	}
}
