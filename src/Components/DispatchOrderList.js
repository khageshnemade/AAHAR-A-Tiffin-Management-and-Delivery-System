const DispatchOrderList =(props)=>{
    const {order}=props
    return (
        <tr>

        <td>{order.userName}</td>
        <td>{order.user_address}</td>
        <td> {order.area}</td>
        <td>{order.city}</td>
        <td>{order.pincode}</td>
        <td> {order.orderId}</td>
        </tr>
    )
}
export default DispatchOrderList