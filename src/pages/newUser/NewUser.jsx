import React from 'react'
import './newuser.css'
export default function NewUser() {
  return (
    <div className='NewUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItems'>
          <label>Username</label>
          <input type='text' className='newUserInput' placeholder='annabec99' />
        </div>
        <div className='newUserItems'>
          <label>Full Name</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='Dani Daniel'
          />
        </div>
        <div className='newUserItems'>
          <label>Email</label>
          <input
            type='email'
            className='newUserInput'
            placeholder='annabec99@yahoo.com'
          />
        </div>
        <div className='newUserItems'>
          <label>Password</label>
          <input
            type='password'
            className='newUserInput'
            placeholder='password'
          />
        </div>
        <div className='newUserItems'>
          <label>Phone</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='+971 582 997 626'
          />
        </div>
        <div className='newUserItems'>
          <label>Address</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='Abu Dhabi | UAE'
          />
        </div>
        <div className='newUserItems'>
          <label>Gender</label>
          <div className='newUserGender'>
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='others'>Others</label>
            <input type='radio' name='gender' id='others' value='others' />
          </div>
        </div>
        <div className='newUserItems'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}
