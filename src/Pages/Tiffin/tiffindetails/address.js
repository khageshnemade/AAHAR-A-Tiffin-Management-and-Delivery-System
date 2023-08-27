import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import NavUser from '../../../Components/navUser'
import config from '../../../config'

const Address = () => {
  //const { adr } = props
  const [address, setAddress] = useState([])
  const [addressLine, setAddressLine] = useState('')
  const [locationId, setLocationId] = useState('')
  const navigate = useNavigate()

  // const selectArea=()=>{
  //     // sessionStorage.setItem("location",{adr.locationId});
  //     // console.log(sessionStorage.getItem("orderId"))
  // }
  const getaddress = () => {
    const url = config.serverURL + `/deliveryAddress`
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data

        setAddress(result.data)
        console.log()
      })
  }

  const AddAddress = () => {
    const userId = parseInt(localStorage['id'])
    if (addressLine.length == 0) {
      alert('please enter Address')
    } else {
      const body = {
        addressLine,
        locationId,
        userId,
      }
      console.log(`location id ${locationId}`)
      const url = config.serverURL + `/user/userAddress/add`
      axios
        .post(url, body, {
          headers: { Authorization: `Bearer ${localStorage['jwt']}` },
        })
        .then((response) => {
          const result = response.data

          console.log(result)
          navigate('/showTiffin')
        })
    }
  }
  useEffect(() => {
    getaddress()
  }, [])
  return (
    // <div>
    //     <li><a  class="dropdown-item active" onClick={selectArea}>{adr.deliveryArea}</a></li>

    // </div>
    <div>
      <NavUser></NavUser>
      <div class='row'>
        <div class='col' />
        <div class='col'>
          <h1 className='title' style={{ color: 'white' }}>
            Add Address
          </h1>

          <div style={{ paddingTop: '30px', color: 'white' }} className='form'>
            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Addresss
              </label>
              <input
                onChange={(e) => {
                  setAddressLine(e.target.value)
                  console.log(addressLine)
                }}
                type='text'
                className='form-control'></input>
            </div>

            <div class='dropdown' id='drop'>
              <select
                value={locationId}
                onChange={(e) => {
                  setLocationId(e.target.value)
                }}>
                <option selected>Select Area</option>
               
                {address.map((adr) => {
                  return (
                    <option value={adr.locationId}>{adr.deliveryArea}, {adr.city}</option>
                  )
                })}
              </select>
            </div>

            <div style={{ paddingTop: '20px' }} className='mb-3'>
              <button className='btn btn-success' onClick={AddAddress}>
                Add
              </button>
              <Link style={{ paddingLeft: 30 }} to='/showTiffin'>
                <button className='btn btn-danger float-center'>Back</button>
              </Link>
              {/* <Link to="/" className="btn btn-danger float-end">
              Cancel
            </Link> */}
            </div>
          </div>
        </div>
        <div class='col' />
      </div>
    </div>
  )
}

export default Address
