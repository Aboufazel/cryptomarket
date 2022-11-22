import './SearchBox.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {List} from "@mui/material";
import {useState} from "react";


const SearchBox = () => {
  const [search , setSearch] = useState("");

  const manageSearch = (e)=>{
      let lowerCase = e.target.value.toLowerCase();
      setSearch(lowerCase);
  }

  return(
      <div className={'SearchBox'}>
          <FontAwesomeIcon icon={faSearch}/>
          <input type={"text"} placeholder={"Search all assets"}  className={'searchInput'} onChange={manageSearch}/>
      </div>
  )
}



export default SearchBox;