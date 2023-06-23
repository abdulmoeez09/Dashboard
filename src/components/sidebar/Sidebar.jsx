import React from 'react'
import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Store,
  AttachMoney,
  Report,
  MailOutline,
  Feedback,
  Message,
  LocalMall,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItems active'>
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>

            <li className='sidebarListItems'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItems'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link className='link' to='/users'>
              <li className='sidebarListItems'>
                <Person className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link className='link' to='/products'>
              <li className='sidebarListItems'>
                <Store className='sidebarIcon' />
                Products
              </li>
            </Link>

            <li className='sidebarListItems'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItems'>
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItems'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItems'>
              <Feedback className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItems'>
              <Message className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItems'>
              <LocalMall className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItems'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItems'>
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
