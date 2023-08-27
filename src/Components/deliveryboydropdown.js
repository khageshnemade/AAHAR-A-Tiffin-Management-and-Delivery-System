import axios from 'axios'
import { useState } from 'react'
import config from '../config'

const DeliverboyName = (props) => {
  const { boys } = props
  const { order } = props

  const DeliveryBoy = () => {
    const url = config.serverURL + `/daywiseOrder/dispatchOrder`
    const userId = boys.userId
    const do_id = order
    const body = {
      userId,
      do_id,
    }

    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data

        if (result['status'] == 'success') {
          // navigate('/home')
        } else {
          alert(result.error)
        }
      })
  }
  return (
    <option value={boys.userName} onClick={DeliveryBoy}>
      {boys.userName}
    </option>
  )
}
export default DeliverboyName
