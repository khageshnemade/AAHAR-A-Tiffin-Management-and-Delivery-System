import axios from 'axios'
import { useEffect, useState } from 'react'
import DispatchOrderList from '../../Components/DispatchOrderList'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const DispatchedOrders = () => {
  const [Orders, setdayWiseorder] = useState([])
  const getOrders = () => {
    const url = config.serverURL+`/daywiseOrder/ListOfDispatched`
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          // navigate('/home')
          console.log(result['data'])
          setdayWiseorder(result['data'])
        } else {
          alert(result.error)
        }
      })
  }
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h1 style={{ textAlign: 'center', color: 'white', marginTop: 50 }}>
        Orders List
      </h1>
      <br />
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table
            class='table  table-dark table-striped'
            style={{ textAlign: 'center' }}>
            <thead
              class='table-primary'
              style={{ background: 'grey', color: 'white' }}>
              <th>UserName</th>
              <th>Address</th>
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
export default DispatchedOrders
