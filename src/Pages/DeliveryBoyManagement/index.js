import axios from 'axios'
import DeliveryBoyList from '../../Components/DeliveryBoyList'
import Footcomponent from '../../Components/footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const DeliveryBoyManagement = () => {
  const [DeliveryBoys, setDeliveryBoys] = useState([])
  const getDeliveryBoys = () => {
    const url = config.serverURL + `/admin/DeliveryBoys`
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          // navigate('/home')
          console.log(result['data'])
          setDeliveryBoys(result['data'])
        } else {
          alert(result.error)
        }
      })
  }

  useEffect(() => {
    if (localStorage['loginStatus'] == 1) getDeliveryBoys()
  }, [])
  return (
    <div>
      <NavAdmin></NavAdmin>
      <Link to='/AddDeliveryBoy'>
        <button
          type='button'
          className='btn btn-warning'
          style={{ width: 300 }}>
          Add Delivery Boy
        </button>
      </Link>
      <h1 style={{ textAlign: 'center', color: 'white' }}>
        Delivery Boys List
      </h1>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col-10'>
          <table className='table  table-dark table-striped'>
            <thead
              className='table-primary'
              style={{ color: 'white', background: 'grey' }}>
              <th>userId</th>
              <th>userName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Adhar</th>

              <th>Delete</th>
            </thead>
            <tbody>
              {DeliveryBoys.map((user) => {
                return (
                  <DeliveryBoyList
                    user={user}
                    getDeliveryBoys={getDeliveryBoys}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='col'></div>
      </div>
      {/* <Footcomponent /> */}
    </div>
  )
}
export default DeliveryBoyManagement
