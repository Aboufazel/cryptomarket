import Container from "../Container/Container";
import './Main.style.scss'
import CoinBox from "../CoinBox/CoinBox";



const Main = () => {
  return(
      <Container>
          <div className={'mainIndex'}>
              <div className={'title'}>
                  <h2>
                      {'Top Coin'}
                  </h2>
              </div>
              <div className={"card"}>
                  <CoinBox/>
                  <CoinBox/>
                  <CoinBox/>
              </div>
              <div className={''} style={{color:"black"}}>
                  <h2>
                      {'10 Top Coin'}
                  </h2>
              </div>
              <div className={"card"}>
                  <CoinBox/>
                  <CoinBox/>
                  <CoinBox/>
              </div>
              <div className={"card"}>
                  <CoinBox/>
                  <CoinBox/>
                  <CoinBox/>
              </div>
              <div className={"card"}>
                  <CoinBox/>
                  <CoinBox/>
                  <CoinBox/>
              </div>
          </div>
      </Container>
  )
}


export default Main;