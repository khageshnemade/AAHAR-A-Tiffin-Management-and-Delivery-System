import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import config from '../../../config'

const SetPayment = () => {
  const naviagte = useNavigate()
  const [orderId, setOrderId] = useState(sessionStorage.getItem('orderId'))
  const [totalAmount, setTotalAmount] = useState(
    sessionStorage.getItem('totalAmount')
  )
  const [paymentType, setPaymentType] = useState(' ')

  const save = () => {
    if (paymentType.length == 0) alert('please select payment type..')
    else {
      const body = {
        orderId,
        totalPayment: totalAmount,
        paymentType,
        paymentStatus: 'paid',
      }
      naviagte('/showtiffin')
      const url = config.serverURL + `/payment`
      axios
        .post(url, body, {
          headers: { Authorization: `Bearer ${localStorage['jwt']}` },
        })
        .then((response) => {
          const result = response.data
          if (result != null) {
            toast.success('Payment done Succesfull')
          } else {
            alert('something went wrong..')
          }
        })
    }
  }

  return (
    <div className='container py-5 h-100'>
      <h2 style={{ textAlign: 'center' }}>Payment Details</h2>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col col-xl-6'>
          <div class='col-md-6 text-left text-white lcol'>
            <div class='greeting'>
              <h3>
                Happy To See U In <span class='txt'>Aahar</span>
              </h3>
            </div>
            <h6 class='mt-3'>let's Make a Payment in Simpler Way...</h6>
            <div class='footer'>
              <div class='socials d-flex flex-row justify-content-between text-white'>
                <div class='d-flex flex-row'>
                  <i class='fab fa-linkedin-in'></i>
                  <i class='fab fa-facebook-f'></i>
                  <i class='fab fa-twitter'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='row g-0'>
              <div className='flex align-items-center'>
                <div className='card-body p-4 p-lg-5 text-black'>
                  <div class='row'>
                    <div class='icons'>
                      <img src='https://img.icons8.com/color/48/000000/visa.png' />
                      <img src='https://img.icons8.com/color/48/000000/mastercard-logo.png' />
                      <img src='https://img.icons8.com/color/48/000000/maestro.png' />
                    </div>
                  </div>
                  <form class='mx-1 mx-md-4'>
                    <h5 className='fw-normal mb-3 pb-3'>Payment Here</h5>
                    <div className='form-outline mb-4'></div>

                    <label className='btn btn-info'> Payment Type </label>
                    <select
                      onChange={(e) => {
                        setPaymentType(e.target.value)
                      }}>
                      {' '}
                      <option value=''> paymentMode </option>
                      <option value='COD'> COD </option>
                      <option value='CARD'> Card </option>
                      <option value='UPI'> UPI </option>
                      <option value='NETBANKING'> Net Banking </option>
                    </select>

                    <div className='pt-1 mb-4'>
                      <button
                        style={{ marginTop: '25px' }}
                        onClick={save}
                        className='btn btn-success'
                        type='button'>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetPayment
