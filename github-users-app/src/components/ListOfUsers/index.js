import React from 'react'
import UserCard from '../UserCard/index'

const ListOfUsers = ({ users }) => {
  return (
    <div className="list-of-user">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

export default ListOfUsers
