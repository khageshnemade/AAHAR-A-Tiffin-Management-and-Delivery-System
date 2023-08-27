import axios from 'axios'
import { useEffect, useState } from 'react'
import DaywiseOrder from '../../Components/DaywiseOrder'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import './index.css'
import NavAdmin from '../../Components/navAdmin'
import Footcomponent from '../../Components/footer'
import config from '../../config'
import { toast } from 'react-toastify'

const AdminHome = () => {
  const { state } = useLocation('')
  const [daywiseOrder, setdayWiseorder] = useState([])
  const [daywisedispatched, setdaywisedispatched] = useState([])
  const [daywisedelivered, setdaywisedelivered] = useState([])
  const GetPendingOrders = () => {
    const url = config.serverURL + `/daywiseOrder/countpending`
    console.log(localStorage['jwt'])
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setdayWiseorder(result['data'])
        }
      })
  }
  const GetDispatched = () => {
    const url = config.serverURL + `/daywiseOrder/countDispatched`
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setdaywisedispatched(result['data'])
        }
      })
  }
  const GetDelivered = () => {
    const url = config.serverURL + `/daywiseOrder/countDelivered`
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setdaywisedelivered(result['data'])
        }
      })
  }
  const fetchOrders = () => {
    const url = config.serverURL + `/daywiseOrder/todaysOrders`
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          GetPendingOrders()
          GetDispatched()
          GetDelivered()
        }
      })
  }
  const navigate = useNavigate()
  const Logout = () => {
    localStorage['id'] = null
    console.log(localStorage['id'])
    localStorage['loginStatus'] = null
    navigate('/signin')
  }

  useEffect(() => {
    if (localStorage['loginStatus'] == 1) {
      console.log(`${localStorage['loginStatus']}`)
      fetchOrders()
      if (state) {
        toast.info(state.message)
      }
    }
  }, [])

  return (
    <div>
      <NavAdmin></NavAdmin>
      <button
        class='btn btn-warning'
        style={{ width: 250 }}
        onClick={fetchOrders}>
        Fetch todays Orders
      </button>
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-sm'>
            <div className='card' style={{ backgroundColor: '#D7DBDD' }}>
              <h5 className='card-title'>Pending Orders</h5>
              <hr />
              {daywiseOrder.length > 0 && (
                <div className='card-body'>
                  <table className='table table-stripped'>
                    <thead>
                      <tr>
                        <th
                          className='table-head'
                          style={{ background: 'orange' }}>
                          Tiffin Name
                        </th>
                        <th
                          className='table-head'
                          style={{ background: 'orange' }}>
                          Tiffin Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {daywiseOrder.map((order) => {
                        ;<tr></tr>
                        return <DaywiseOrder order={order} />
                      })}
                    </tbody>
                  </table>
                  <Link to='/AssignOrders'>
                    <button class='btn btn-success'>Assign Delivery Boy</button>
                  </Link>
                </div>
              )}
              {daywiseOrder.length == 0 && (
                <div>
                  <span className='badge bg-warning text-dark'>
                    No Pending Orders
                  </span>{' '}
                </div>
              )}
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
        <br />
        <hr />
        <br />
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-sm'>
            <div className='card' style={{ backgroundColor: '#D7DBDD' }}>
              <h5 className='card-title'>Dispatched Orders</h5>
              <hr />
              {daywisedispatched.length > 0 && (
                <div className='card-body'>
                  <table className='table table-stripped'>
                    <thead>
                      <tr>
                        <th className='bg-warning'>Tiffin Name</th>
                        <th className='bg-warning'>Tiffin Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {daywisedispatched.map((order) => {
                        ;<tr></tr>
                        return <DaywiseOrder order={order} />
                      })}
                    </tbody>
                  </table>
                  <Link to='/DispatchedOrders'>
                    <button className='btn btn-success'>
                      Dispatched Orders
                    </button>
                  </Link>
                </div>
              )}
              {daywisedispatched.length == 0 && (
                <div>
                  <span className='badge bg-warning text-dark'>
                    No dispatched Orders
                  </span>{' '}
                </div>
              )}
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
        <hr />
        <br />

        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-sm'>
            <div className='card' style={{ backgroundColor: '#D7DBDD' }}>
              <h5 className='card-title'>Delivered Orders</h5>

              <hr />
              {daywisedelivered.length > 0 && (
                <div className='card-body'>
                  <table className='table table-stripped'>
                    <thead>
                      <tr>
                        <th className='bg-success'>Tiffin Name</th>
                        <th className='bg-success'>Tiffin Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {daywisedelivered.map((order) => {
                        ;<tr></tr>
                        return <DaywiseOrder order={order} />
                      })}
                    </tbody>
                  </table>
                  <Link to='/DeliveredOrders'>
                    <button className='btn btn-success'>
                      Delivered Orders
                    </button>
                  </Link>
                </div>
              )}
              {daywisedelivered.length == 0 && (
                <div>
                  <span className='badge bg-warning text-dark'>
                    No Delivered Orders
                  </span>{' '}
                </div>
              )}
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
        <br />
        <br />
      </div>
      <Footcomponent />
    </div>
  )
}
export default AdminHome
