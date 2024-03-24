import StyledPagination from './styled/StyledPagination'

interface PaginationProps {
  page: number
  setPage: (page: number) => void
  totalPage: number
}

const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  return (
    <StyledPagination>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {'<<'}
      </button>
      <p>{page}</p>
      <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>
        {'>>'}
      </button>
    </StyledPagination>
  )
}

export default Pagination
