import img1 from '../images/img1.jpg'
import { useNavigate, Link } from 'react-router-dom'
import Description from './description'
import { useLocation } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import config from '../../../config'

const styles = {
  detailsContainer: {
    marginTop: '10px',
    marginBottom: '10px',
  },
}

const Tiffin = (props) => {
  const { tiffin } = props
  const navigate = useNavigate()

  //  const id=1
  const id = localStorage['id']
  console.log(id)
  const checkAddress = () => {
    const url = config.serverURL + `/user/userAddress/${id}`
    // const body={id}

    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage['jwt']}` } })
      .then((response) => {
        const result = response.data
        if (result['data'] == null) {
          toast.error('please add address to continue')
        } else {
          navigate('/order', { state: { tiffin: tiffin } })
        }
      })
  }

  const addDescription = () => {
    navigate('/description', { state: { tiffinId: tiffin.tiffinId } })
  }
  return (
    <div
      className='container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridTemplateColumns: '1fr',
      }}>
      <div
        className='card'
        style={{
          display: 'grid',
          minWidth: '18rem',
          position: 'relative',
          borderRadius: 20,
          backgroundColor: 'grey',
          color: 'white',
        }}>
        <div className='card-body' style={{ position: 'relative', padding: 5 }}>
          <img
            src={config.serverURL + '/images/' + tiffin.tiffinImage}
            className='card-img-top'
            style={{
              height: 250,
              width: '100%',
              display: 'block',
              borderRadius: 10,
            }}
            alt='...'
          />
          <div style={{ marginTop: 20, height: 100 }}>
            <h5 className='card-title'>{tiffin.tiffinName}</h5>

            <p className='text'>Description: {tiffin.description}</p>
          </div>

          <div className='row'>
            <div className='col'>
              <h5 className='card-title'>Price : {tiffin.tiffinPrice}</h5>
            </div>
            <div className='col d-grid gap-2 d-md-flex justify-content-md-end'>
              <button
                className='btn btn-primary'
                type='button'
                onClick={checkAddress}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  )
}

export default Tiffin
