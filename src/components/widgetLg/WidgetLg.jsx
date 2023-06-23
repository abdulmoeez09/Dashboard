import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={' widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTd'>Customer</th>
          <th className='widgetLgTd'>Date</th>
          <th className='widgetLgTd'>Amount</th>
          <th className='widgetLgTd'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/originals/4e/49/46/4e4946affe2967a872449e509727f929.jpg'
              alt=''
              className='widgetLgimg'
            />
            <span className='widgetLgName'>Peter Oluad</span>
          </td>
          <td className='widgetLgDate'>23 July 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/originals/4e/49/46/4e4946affe2967a872449e509727f929.jpg'
              alt=''
              className='widgetLgimg'
            />
            <span className='widgetLgName'>Peter Oluad</span>
          </td>
          <td className='widgetLgDate'>18 July 2021</td>
          <td className='widgetLgAmount'>$100.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>{' '}
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/originals/4e/49/46/4e4946affe2967a872449e509727f929.jpg'
              alt=''
              className='widgetLgimg'
            />
            <span className='widgetLgName'>Peter Oluad</span>
          </td>
          <td className='widgetLgDate'>13 July 2021</td>
          <td className='widgetLgAmount'>$128.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>{' '}
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://i.pinimg.com/originals/4e/49/46/4e4946affe2967a872449e509727f929.jpg'
              alt=''
              className='widgetLgimg'
            />
            <span className='widgetLgName'>Peter Oluad</span>
          </td>
          <td className='widgetLgDate'>03 July 2021</td>
          <td className='widgetLgAmount'>$260.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  )
}
