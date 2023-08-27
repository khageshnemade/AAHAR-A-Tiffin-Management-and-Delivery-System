import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import DeliveryBoyOrders from '../../Components/DeliveryBoyOrders'
import Footcomponent from '../../Components/footer'
import config from '../../config'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router'

const DeliveryDetails = () => {
  const [daywiseOrder, setdayWiseorder] = useState([])
  const { state } = useLocation('')
  const fetchOrders = () => {
    const userId = localStorage['id']
    const url = config.serverURL + `/deliveryBoy/orders/${userId}`
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        console.log(`hello`)
        if (result['status'] == 'success') {
          setdayWiseorder(result['data'])
          console.log(result['data'])
        }
      })
  }
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage['id'] = null
    console.log(sessionStorage['id'])
    sessionStorage['loginStatus'] = null
    navigate('/signin')
  }
  useEffect(() => {
    fetchOrders()
    if (state) {
      toast.info(state.message)
    }
  }, [])
  return (
    <div>
      <nav
        class='navbar navbar-light bg-grey'
        style={{ backgroundColor: '#4caf95' }}>
        <span class='navbar-text'>
          <h2 style={{ color: 'white' }}> Delivery Boy Home</h2>
        </span>
        <button
          type='submit'
          onClick={Logout}
          class='btn btn-danger'
          style={{ width: 100 }}>
          Logout
        </button>
      </nav>
      <br></br>

      <h1 style={{ textAlign: 'center', color: 'white' }}>Orders List</h1>
      <br />
      <br />
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table class='table  table-light table-striped'>
            <thead
              class='table-primary'
              style={{ color: 'white', background: 'grey' }}>
              <th>userName</th>
              <th>user_address</th>
              <th>Area</th>
              <th>City</th>
              <th>Pincode</th>
              <th>OrderId</th>
              <th> Make it Deliver</th>
            </thead>
            <tbody>
              {daywiseOrder.map((order) => {
                return (
                  <DeliveryBoyOrders order={order} fetchOrders={fetchOrders} />
                )
              })}
            </tbody>
          </table>
        </div>
        <div class='col'></div>
      </div>
      {/* <Footcomponent /> */}
    </div>
  )
}
export default DeliveryDetails
