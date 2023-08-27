import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import config from '../config'

const DeliveryBoyList = (props) => {
  const { user, getDeliveryBoys } = props
  const navigate = useNavigate()

  const DeleteDelieryBoy = () => {
    let userId = user.userId
    const url = config.serverURL + `/admin/DeliveryBoys/Delete/${userId}`

    console.log(userId)

    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          console.log('deleted successfully')
          getDeliveryBoys()
        } else {
          alert(result.error)
        }
      })
  }

  return (
    <tr>
      <td>{user.userId}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.aadharNo}</td>
      <td>
        <button type='button' class='btn btn-danger' onClick={DeleteDelieryBoy}>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default DeliveryBoyList
