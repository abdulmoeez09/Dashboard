import React from 'react'
import './userlist.css'
import { DataGrid } from '@material-ui/data-grid'
import { userRows } from '../../dummyData'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function UserList() {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'userName',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.Avatar} alt='' />
            {params.row.userName}
          </div>
        )
      },
    },
    { field: 'Email', headerName: 'Email', width: 200 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'Transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>

            <DeleteOutline
              className='userListDelete'
              onclick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
