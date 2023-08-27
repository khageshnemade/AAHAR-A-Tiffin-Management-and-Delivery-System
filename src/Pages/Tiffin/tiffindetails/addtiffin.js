import { withEmotionCache } from '@emotion/react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavAdmin from '../../../Components/navAdmin'
import config from '../../../config'

const AddTiffin = () => {
  const [tiffinImage, setTiffinImage] = useState(undefined)
  const [tiffinName, setTiffinName] = useState('')
  const [tiffinPrice, setTiffinPrice] = useState(100)
  const [description, setDescription] = useState('')

  //const navigate = useNavigate()
  const navigate = useNavigate()

  const onFileSelect = (event) => {
    setTiffinImage(event.target.files[0])
  }

  const save = () => {
    if (tiffinName.length == 0) {
      alert('please enter tiffin name')
    } else if (tiffinPrice.length == 0) {
      alert('please enter price')
    } else if (description.length == 0) {
      alert('please enter contents')
    } else {
      const body = {
        tiffinImage,
        tiffinName,
        tiffinPrice,
        description,
      }

      const data = new FormData()

      data.append('tiffinImage', tiffinImage)
      data.append('tiffinName', tiffinName)
      data.append('tiffinPrice', tiffinPrice)
      data.append('description', description)

      console.log(`${tiffinName} ${tiffinPrice} ${description} ${tiffinImage}`)
      const url = config.serverURL+`/tiffin/addTiffin`
      axios
        .post(url, data, {
          headers: { Authorization: `Bearer ${localStorage['jwt']}` },
        })
        .then((response) => {
          const result = response.data
          if (result != null) {
            alert('added new Tiffin..')

            navigate('/AdminTiffin')
          } else {
            alert('tiffin not added..')
          }
        })
    }
  }

  return (
    <div class='row'>
      <NavAdmin></NavAdmin>
      <div class='col-2' />
      <div class='col-4'>
        <h1 className='title' style={{ color: 'white' }}>
          Add Tiffin
        </h1>

        <div className='form'>
          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Tiffin Name
            </label>
            <input
              onChange={(e) => {
                setTiffinName(e.target.value)
              }}
              type='text'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Tiffin Price
            </label>
            <input
              onChange={(e) => {
                setTiffinPrice(e.target.value)
              }}
              type='text'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <input
              accept='image/*'
              onChange={onFileSelect}
              type='file'
              className='form-control'
            />

            <label htmlFor='' style={{ color: 'white' }}>
              <b>Image</b>
            </label>
          </div>

          <div className='mb-3'>
            <label
              htmlFor=''
              className='label-control'
              style={{ color: 'white' }}>
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              rows='5'
              className='form-control'></textarea>
          </div>

          <div className='mb-3'>
            <button onClick={save} className='btn btn-success'>
              Add
            </button>
            <Link to='/' className='btn btn-danger float-end'>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class='col' />
    </div>
  )
}

export default AddTiffin
