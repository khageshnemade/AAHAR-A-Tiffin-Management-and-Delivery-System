import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../config'

const DeliveryBoyOrders = (props) => {
  const { order, fetchOrders } = props

  const Delivered = () => {
    const do_id = order.do_id
    const body = {
      do_id,
    }
    const url = config.serverURL + `/deliveryBoy/Delivered`
    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        console.log(`hello`)
        if (result['status'] == 'success') {
          // setdayWiseorder(result["data"]);
          fetchOrders()
          console.log(result['data'])
        }
      })
  }
  return (
    <tr>
      <td>{order.userName}</td>
      <td>{order.user_address}</td>
      <td> {order.area}</td>
      <td>{order.city}</td>
      <td>{order.pincode}</td>
      <td> {order.orderId}</td>
      <td>
        <button class='btn btn-warning' onClick={Delivered}>
          Delivered Orders
        </button>
      </td>
    </tr>
  )
}
export default DeliveryBoyOrders
