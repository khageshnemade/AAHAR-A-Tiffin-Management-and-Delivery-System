import { useEffect } from 'react'

const DaywiseOrder = (props) => {
  const { order } = props

  // console.log(order)
  return (
    <tr>
      {/* <h5 class="card-title">Thali-Name   {order.tiffinname}       Tiffin-count={order.count} </h5> */}
      {/* <div className="container"> */}
      {/* <p class="card-text"> {order.tiffinname}    Tiffin-count={order.count}</p> */}
      {/* </div> */}

      <td> {order.tiffinname} </td>
      <td>{order.count}</td>
    </tr>
  )
}
export default DaywiseOrder
