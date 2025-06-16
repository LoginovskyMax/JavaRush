import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchCharacters, setCurrentPage } from '../store/slices/charactersSlise'
import './style.scss'

const Pagination = () => {
 const { totalPages, isLoading, currentPage } = useAppSelector((state) => state.characters)
  const dispatch = useAppDispatch()
 const getNextPage = () => {
    if(totalPages < (currentPage + 1) ) return

    dispatch(setCurrentPage(currentPage + 1))
    dispatch(fetchCharacters(currentPage +1))
 }

  const getPrevPage = () => {
     if(currentPage === 1 ) return

    dispatch(setCurrentPage(currentPage - 1))
    dispatch(fetchCharacters(currentPage -1))
 }
    return (
        <div className='pagination'>
           <button disabled={isLoading} onClick={getPrevPage}>Prev</button>
           <span>{currentPage}...</span>
           {totalPages && <span>{totalPages}</span>}
           <button disabled={isLoading} onClick={getNextPage}>Next</button>
        </div>
    )
}

export default Pagination