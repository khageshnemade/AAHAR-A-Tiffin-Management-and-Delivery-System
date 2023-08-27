import axios from 'axios'
import { useEffect, useState } from 'react'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const DeliveryAddresses = () => {
  const [Address, setAddress] = useState([])
  const Assignorders = () => {
    const url = config.serverURL+`/deliveryAddress`
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          // navigate('/home')
          console.log(result.data)
          setAddress(result['data'])
        } else {
          alert(result.error)
        }
      })
  }

  useEffect(() => {
    Assignorders()
  }, [])
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h2 style={{ textAlign: 'center', color: 'white', marginTop: 50 }}>
        Delivery Addresses
      </h2>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col-8'>
          <table
            className='table'
            style={{ backgroundColor: '#4caf50', textAlign: 'center' }}>
            <thead>
              <th>LocationId</th>
              <th>DeliveryArea</th>
              <th>City</th>
              <th>Pincode</th>
            </thead>

            {Address.map((address) => {
              return (
                <tr key={address.locationId}>
                  <td className='table-info'>{address.locationId}</td>
                  <td>{address.deliveryArea}</td>
                  <td>{address.city}</td>
                  <td>{address.pinCode}</td>
                </tr>
              )
            })}
          </table>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
export default DeliveryAddresses
