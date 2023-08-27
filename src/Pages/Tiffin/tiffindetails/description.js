import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import config from '../../../config'

const Description = () => {
  const { state } = useLocation('')
  const [description, setDescription] = useState('')
  const [tiffinId, setTiffinId] = useState('')

  useEffect(() => {
    const { tiffinId } = state
    console.log(tiffinId)
    setTiffinId(tiffinId)
    save()
  }, [])

  const save = () => {
    console.log(tiffinId)
    const body = {
      tiffinId,
    }
    const url = config.serverURL+`/tiffinDetails`
    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result != null) {
          console.log(result.data)
          setDescription(result.data.description)
        } else {
          alert('No description available..')
        }
      })
  }

  return (
    <div>
      <h1> {description} </h1>
      <h1> Shree... </h1>
    </div>
  )
}

export default Description
