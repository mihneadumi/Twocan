import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table'
import { useMemo } from 'react'
import StyledHome from './StyledHome'
import { useNavigate } from 'react-router-dom'
import User from '../../constants/types'

//nested data is ok, see accessorKeys in ColumnDef below
const data: User[] = [
  {
    id: 1,
    name: {
      firstName: 'John',
      lastName: 'Doe'
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky'
  },
  {
    id: 2,
    name: {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio'
  },
  {
    id: 3,
    name: {
      firstName: 'Joe',
      lastName: 'Doe'
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia'
  },
  {
    id: 4,
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy'
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska'
  },
  {
    id: 5,
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs'
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska'
  },
  {
    id: 6,
    name: {
      firstName: 'Katie',
      lastName: 'Rolluffs'
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska'
  }
]

const Home = () => {
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150
      }
    ],
    []
  )

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => onRowClick(row.id),
      sx: {
        cursor: 'pointer'
      }
    })
  })

  const navigate = useNavigate() // add on click to navigate to detailed view for each user

  const onRowClick = (selectedRow: string) => {
    navigate(`/${selectedRow}`)
  }

  return (
    <StyledHome>
      <h1>Home</h1>
      <MaterialReactTable table={table} />
    </StyledHome>
  )
}

export default Home
