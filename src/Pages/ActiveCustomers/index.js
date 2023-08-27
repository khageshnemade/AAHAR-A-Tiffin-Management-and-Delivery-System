import axios from 'axios'
import { useEffect, useState } from 'react'
import AdminActiveCustomers from '../../Components/AdminActiveCustomers'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const ActiveCustomers = () => {
  const [users, setusers] = useState([])
  const getAllCustomers = () => {
    const url = config.serverURL + `/admin/ActiveCutomers`
    console.log('active Customer ', localStorage['jwt'])
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          setusers(result['data'])
          console.log(result['data'])
        }
      })
  }
  useEffect(() => {
    getAllCustomers()
  }, [])
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Customers List</h1>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col-10'>
          <table
            className='table  table-dark table-striped'
            style={{ background: 'grey' }}>
            <thead className='table-primary' style={{ color: 'white' }}>
              <th>UserId</th>
              <th>UserName</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Days</th>
              <th>Total Amount</th>
              <th>TiffinId</th>
            </thead>
            <tbody>
              {users.map((user) => {
                return <AdminActiveCustomers user={user} />
              })}
            </tbody>
          </table>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
export default ActiveCustomers
