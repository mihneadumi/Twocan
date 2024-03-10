// takes in a list of entities and renders a table with the entity data
// use template
import { useNavigate } from 'react-router-dom'
import User from '../../interfaces/User'
import capitalize from '../../utils/capitalize'
import StyledTable from './styled/StyledTable'

interface UsersTableProps {
  entitites: User[]
}

const UsersTable = ({ entitites }: UsersTableProps) => {
  const navigate = useNavigate()

  const handleUserClick = (id: number) => () => {
    navigate(`/users/${id}`)
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {Object.keys(entitites[0]).map((key: string) => (
            <th key={key}>{capitalize(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entitites.map((entity) => (
          <tr key={entity.id} onClick={handleUserClick(entity.id)}>
            {Object.values(entity).map((value: string | number) => (
              <td key={value.toString()}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default UsersTable
