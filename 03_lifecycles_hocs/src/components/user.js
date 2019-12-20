import React from 'react'
import UserHoc from './hoc/user';

const User2 = (props) => {
    return (
        <div>
            User 2
        </div>
    )
}

const User = (props) => {
    return (
        <div>
            User
        </div>
    )
}

export default UserHoc(User,User2,'Hello i am')
