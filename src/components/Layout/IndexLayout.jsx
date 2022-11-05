import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import {Outlet} from "react-router-dom";
import Container from "../Container/Container";
import './IndexLayout.style.scss'

const IndexLayout = () => {
   return(
      <Container>
          <div className={'indexLayout'}>
              <div className={'top'}>
                  <TopBar/>
              </div>
              <div className={'bottom'}>
                  <div className={'bottom_left'}>
                      <SideBar/>
                  </div>
                  <div className={'bottom_right'}>
                      <Outlet/>
                  </div>
              </div>
          </div>
      </Container>
   )
}


export default IndexLayout;

