import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
  return (
    <div className='User'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://www.wonderslist.com/wp-content/uploads/2019/06/Gigi-Paris-Sexiest-Women-in-the-World.jpg'
              alt=''
              className='userTopImg'
            />
            <div className='userShowTopTitle'>
              <span className='userTopName'>Dani Daniel</span>
              <span className='userTopTitle'>Marketing Manager</span>
            </div>
          </div>
          <div className='userBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShoeInfoTitle'>annabec99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShoeInfoTitle'>09-08-1994</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShoeInfoTitle'>+9715 8299 7626</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShoeInfoTitle'>annabec99@yahoo.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShoeInfoTitle'>Abu Dhabi |UAE</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdataTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItems'>
                <lable>Username</lable>
                <input
                  type='text'
                  placeholder='annabec99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItems'>
                <lable>Full Name</lable>
                <input
                  type='text'
                  placeholder='Dani Daniel'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItems'>
                <lable>Email</lable>
                <input
                  type='text'
                  placeholder='annabec99@yahoo.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItems'>
                <lable>Phone</lable>
                <input
                  type='text'
                  placeholder='+9715 8299 7626'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItems'>
                <lable>Address</lable>
                <input
                  type='text'
                  placeholder='Abu Dhabi |UAE'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://sc04.alicdn.com/kf/HTB1wMqXXOjrK1RjSsplq6xHmVXao.jpg'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
