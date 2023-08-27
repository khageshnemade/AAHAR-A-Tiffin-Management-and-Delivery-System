import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import NavAdmin from '../../Components/navAdmin'
import config from '../../config'

const AdminDeliveryManagement = () => {
  const [delivery_area, setDeliveryarea] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setpincode] = useState(0)

  const navigate = useNavigate()
  const addAddress = () => {
    const body = {
      deliveryArea: delivery_area,
      city,
      pinCode: pincode,
    }
    const url = config.serverURL + `/deliveryAddress/add`
    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data

        toast.success('Delivery Address Added Succesfully')
        navigate('/Admin')
      })
  }
  return (
    <div>
      <div>
        <NavAdmin></NavAdmin>
      </div>

      <Link className='nav-link ' to='/AddressList'>
        <button
          className='btn btn-warning'
          style={{ width: 250, marginTop: 5 }}>
          Delivery Address List
        </button>
      </Link>

      <h1 style={{ textAlign: 'left', color: 'white', marginLeft: 200 }}>
        Add Delivery Area
      </h1>
      <br />
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-3'>
          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Delivery Area
            </label>
            <textarea
              onChange={(e) => {
                setDeliveryarea(e.target.value)
              }}
              rows='5'
              className='form-control'></textarea>
            <br />
            <br />
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              City
            </label>
            <br />
            <input
              onChange={(e) => {
                setCity(e.target.value)
              }}
              type='text'
            />
            <br />
            <br />
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Pincode
            </label>
            <br />
            <input
              onChange={(e) => {
                setpincode(e.target.value)
              }}
              type='number'
            />
            <br />
            <br />
            <button onClick={addAddress} className='btn btn-success'>
              Add Address
            </button>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  )
}
export default AdminDeliveryManagement
