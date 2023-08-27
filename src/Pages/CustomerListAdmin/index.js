import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomerList from '../../Components/CustomerList'
import NavAdmin from '../../Components/navAdmin'
import Footcomponent from '../../Components/footer'
import config from '../../config'

const CustomerListAdmin = () => {
  const [users, setusers] = useState([])
  const getAllCustomers = () => {
    const url = config.serverURL + `/admin/CustomerList`
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setusers(result['data'])
        }
      })
  }
  useEffect(() => {
    if (localStorage['loginStatus'] == 1) {
      getAllCustomers()
    }
  }, [])
  return (
    <div>
      <div>
        <NavAdmin></NavAdmin>
      </div>

      <Link to='/ActiveCustomers'>
        <button
          type='button'
          className='btn btn-warning'
          style={{ width: 250 }}>
          Get Active Customers
        </button>
      </Link>
      <h1 style={{ textAlign: 'center', color: 'white', marginTop: 10 }}>
        Customers List
      </h1>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col-10'>
          <table className='table  table-dark table-striped'>
            <thead
              className='table-primary'
              style={{ background: 'grey', color: 'white' }}>
              <th>UserId</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Aadhar</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <CustomerList user={user} getAllCustomers={getAllCustomers} />
                )
              })}
            </tbody>
          </table>
        </div>
        <div class='col'></div>
      </div>
      <br />
      <br />
      {/* <Footcomponent /> */}
    </div>
  )
}
export default CustomerListAdmin
