import axios from 'axios'
import config from '../config'

const CustomerList = (props) => {
  const { user, getAllCustomers } = props

  const DeleteCustomer = () => {
    let userId = user.userId
    const url = config.serverURL + `/admin/customer/Delete/${userId}`

    console.log(userId)

    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${localStorage['jwt']}` },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] == 'success') {
          console.log('deleted successfully')
          getAllCustomers()
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
        <button type='button' class='btn btn-danger' onClick={DeleteCustomer}>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default CustomerList
