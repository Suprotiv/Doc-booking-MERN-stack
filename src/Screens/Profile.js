import React from 'react'

function Profile() {

const user = JSON.parse(window.localStorage.getItem('user'));
console.log(user)
  return (
    <div>
        {user.name}
    </div>
  )
}

export default Profile