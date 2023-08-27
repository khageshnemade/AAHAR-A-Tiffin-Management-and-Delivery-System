const AdminActiveCustomers = (props) => {
  const { user } = props
  return (
    <tr>
      <td>{user.userId}</td>
      <td>{user.userName}</td>
      <td>{user.startDate.substring(0, 10)}</td>
      <td>{user.endDate.substring(0, 10)}</td>
      <td>{user.totalDays}</td>
      <td>{user.totalAmount}</td>
      <td>{user.tiffinId}</td>
    </tr>
  )
}
export default AdminActiveCustomers
