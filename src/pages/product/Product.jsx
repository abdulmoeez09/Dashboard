import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'
export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={productData}
            dataKey='Sales'
            title='Sales performance'
            grid
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://images.pexels.com/photos/7812322/pexels-photo-7812322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
              className='productInfoTopImg'
            />
            <span className='productInfoTopTitle'>Apple Earpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoBottomItems'>
              <span className='productInfoBottomKey'>id:</span>
              <span className='productInfoBottomValue'>123</span>
            </div>
            <div className='productInfoBottomItems'>
              <span className='productInfoBottomKey'>sales:</span>
              <span className='productInfoBottomValue'>5123</span>
            </div>
            <div className='productInfoBottomItems'>
              <span className='productInfoBottomKey'>active:</span>
              <span className='productInfoBottomValue'>yes</span>
            </div>
            <div className='productInfoBottomItems'>
              <span className='productInfoBottomKey'>in stock:</span>
              <span className='productInfoBottomValue'>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <lable>Product Name</lable>
            <input type='text' placeholder='Apple Earpods' />
            <lable>In Stock</lable>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <lable>Active</lable>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productFormUpload'>
              <img
                src='https://images.pexels.com/photos/7812322/pexels-photo-7812322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt=''
                className='productFormImg'
              />
              <lable for='file'>
                <Publish />
              </lable>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productFormButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
