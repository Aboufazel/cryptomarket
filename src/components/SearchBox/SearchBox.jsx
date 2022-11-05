import './SearchBox.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBox = () => {
  return(
      <div className={'SearchBox'}>
          <FontAwesomeIcon icon={faSearch}/>
          <input type={"text"} placeholder={"Search all assets"}  className={'searchInput'}/>
      </div>
  )
}



export default SearchBox;