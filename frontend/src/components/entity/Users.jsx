import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Users.css'

const Users = () => {
  const [users, setUsers] = useState([])
  const [showUpdatePopup, setShowUpdatePopup] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error)
      })
  }

  const handleDelete = (id) => {
    setShowDeleteConfirm(true)
    setUserToDelete(id)
  }

  const confirmDelete = () => {
    axios.delete(`http://localhost:3000/users/${userToDelete}`)
      .then(response => {
        console.log('User deleted:', response.data)
        fetchUsers()
        setShowDeleteConfirm(false)
        setUserToDelete(null)
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error)
      })
  }

  const handleUpdate = (user) => {
    setSelectedUser(user)
    setShowUpdatePopup(true)
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${selectedUser._id}`, { username: selectedUser.username })
      .then(response => {
        console.log('User updated:', response.data)
        fetchUsers()
        setShowUpdatePopup(false)
        setSelectedUser(null)
      })
      .catch(error => {
        console.error('There was an error updating the user!', error)
      })
  }

  return (
    <div>
      <h1>Space Quest Users</h1>
      <div className='users'>
        {users.map((user) => (
          <div className='user' key={user._id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleUpdate(user)} className="update-btn">Update</button>
            <button onClick={() => handleDelete(user._id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      {showUpdatePopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update User</h2>
            <form onSubmit={handleUpdateSubmit}>
              <label>
                Username:
              </label>
              <input
                type="text"
                value={selectedUser.username}
                onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
              />
              <label>
                Email:
              </label>
              <input
                type="email"
                value={selectedUser.email}
                readOnly
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <button type="submit">Update</button>
                <button onClick={() => setShowUpdatePopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="popup">
          <div className="popup-content">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this user?</p>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={() => setShowDeleteConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users