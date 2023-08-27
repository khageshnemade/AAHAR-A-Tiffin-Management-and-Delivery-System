import axios from 'axios'
import DispatchOrderList from '../../Components/DispatchOrderList'
import { useEffect, useState } from 'react'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const DeliveredOrders = () => {
  const [Orders, setdayWiseorder] = useState([])
  const Assignorders = () => {
    const url = config.serverURL+`/daywiseOrder/ListOfDelivered`
    axios
      .post(
        url,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage['jwt']}` },
        }
      )
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          // navigate('/home')
          console.log()
          setdayWiseorder(result['data'])
        } else {
          alert(result.error)
        }
      })
  }

  useEffect(() => {
    Assignorders()
  }, [Orders])
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h1 style={{ textAlign: 'center' }}>Orders List</h1>
      <br />
      <br />
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table class='table  table-dark table-striped'>
            <thead class='table-primary'>
              <th>userName</th>
              <th>user_address</th>
              <th>Area</th>
              <th>City</th>
              <th>Pincode</th>
              <th>OrderId</th>
            </thead>
            <tbody>
              {Orders.map((order) => {
                return <DispatchOrderList order={order} />
              })}
            </tbody>
          </table>
        </div>
        <div class='col'></div>
      </div>
    </div>
  )
}
export default DeliveredOrders
