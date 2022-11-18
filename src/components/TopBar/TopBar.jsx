import Container from "../Container/Container";
import SearchBox from "../SearchBox/SearchBox";
import LogoBox from "../LogoBox/LogoBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons/faBell";
import './TopBar.style.scss'
import {Link} from "react-router-dom";



const TopBar = () => {
  return(
      <Container>
          <div className={'topBar'}>
              <div className={'leftSide'}>
                  <Link to={"/"} style={{textDecoration:"none" , color:"black"}}>
                      <LogoBox/>
                  </Link>
                  <SearchBox/>
              </div>
              <div className={'rightSide'}>
                 <FontAwesomeIcon icon={faBell}/>
              </div>
          </div>
      </Container>
  )
}


export default TopBar;