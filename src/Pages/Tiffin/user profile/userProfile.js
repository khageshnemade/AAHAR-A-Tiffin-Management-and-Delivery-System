import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavUser from '../../../Components/navUser'
import config from '../../../config'

const UserProfile = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const id = localStorage['id']
  const loadUser = () => {
    console.log(id)
    const url = config.serverURL + `/user/${id}`
    // const body = {
    //     userId
    // }

    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] === 'success') {
          setUser(result['data'])
          console.log(result['data'])
        }
      })
  }

  const nav = () => {
    navigate('/editUser')
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <div>
      <NavUser></NavUser>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <br />
            <br />
            <br />

            <table
              class='table table-dark table-striped'
              style={{ textAlign: 'center', height: '115%' }}>
              <tbody>
                <tr>
                  <td>User ID</td>
                  <td>{user.userId}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{user.userName}</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>{user.role}</td>
                </tr>
                <tr>
                  <td>Aadhar Number</td>
                  <td>{user.aadharNo}</td>
                </tr>
              </tbody>
            </table>
            <div className='mb-3' style={{ textAlign: 'center' }}>
              <button onClick={nav} className='btn btn-danger float-center'>
                Edit User
              </button>
              <Link style={{ paddingLeft: 30 }} to='/showTiffin'>
                <button className='btn btn-success float-center'>Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
