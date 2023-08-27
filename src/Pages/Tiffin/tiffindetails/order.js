import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import axios from 'axios'
import Address from './address'
import { toast } from 'react-toastify'
import config from '../../../config'

const Order = () => {
  const { state } = useLocation()
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [totalDays, setTotalDays] = useState('')
  const [totalPrice, setTotalPrice] = useState('')
  const [address, setAddress] = useState([])

  useEffect(() => {
    const { tiffin } = state
    setName(tiffin.tiffinName)
    diff()
    getaddress()
  }, [endDate, startDate])

  const save = () => {
    const userId = parseInt(localStorage['id'])
    console.log(userId)
    if (userId == undefined) {
      toast.error('please login to place order')
    } else if (startDate.length == 0 || startDate <= Date.length) {
      toast.warning('please enter current or future start date')
    } else if (endDate.length == 0 || endDate < startDate) {
      toast.warning('please enter future end date')
    } else {
      const body = {
        startDate,
        endDate,
        totalDays,
        totalAmount: totalPrice,
        tiffinId: state.tiffin.tiffinId,
        userId,
      }

      const url = config.serverURL + `/user/order/AddOrder`
      axios
        .post(url, body, {
          headers: { Authorization: `Bearer ${localStorage['jwt']}` },
        })
        .then((response) => {
          const result = response.data
          if (result.status == 'success') {
            sessionStorage.setItem('orderId', result.data.orderId)
            sessionStorage.setItem('totalAmount', result.data.totalAmount)
            toast.success('order placed..')
            console.log(result.orderId)
            console.log(result.totalAmount)
            navigate('/payment')
          } else {
            toast.error('something went wrong..')
          }
        })
    }
  }

  const getaddress = () => {
    const url = config.serverURL + `/deliveryAddress`
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result != null) {
          setAddress(result)
          console.log(result)
        } else {
          toast.error('something went wrong..')
        }
      })
  }

  const diff = () => {
    var d1 = new Date(startDate)
    var d2 = new Date(endDate)
    var diff = d2.getTime() - d1.getTime()
    if (d2.getTime() < d1.getTime()) {
      var daydiff = 0
    } else {
      daydiff = diff / (1000 * 60 * 60 * 24)
    }
    var price = daydiff * state.tiffin.tiffinPrice
    setTotalPrice(price)
    setTotalDays(daydiff)
    const days = document.getElementById('totaldays')
    days.innerText = daydiff
    const pay = document.getElementById('totalprice')
    pay.innerText = price
  }

  return (
    <div class='row'>
      <div class='col' />
      <div class='col'>
        <h1
          style={{ alignContent: 'center', color: 'white' }}
          className='title'>
          Order Details
        </h1>

        <div className='form'>
          <div style={{ paddingTop: '30px' }} className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Start Date
            </label>
            <input
              onChange={(e) => {
                setStartDate(e.target.value)
              }}
              type='date'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              End Date
            </label>
            <input
              onChange={(e) => {
                setEndDate(e.target.value)
              }}
              type='date'
              className='form-control'
              placeholder='YYYY-MM-DD'
            />
          </div>

          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Total Days
            </label>
            <h5
              id='totaldays'
              style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                background: 'white',
                paddingLeft: '15px',
              }}></h5>
          </div>

          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Total Price
            </label>
            <h5
              id='totalprice'
              style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                background: 'white',
                paddingLeft: '15px',
              }}></h5>
          </div>

          <div style={{ paddingTop: '50px' }} className='mb-3'>
            <button className='btn btn-success' onClick={save}>
              Add
            </button>
            <Link to='/showTiffin' className='btn btn-danger float-end'>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class='col' />
    </div>
  )
}

export default Order
