import Container from "../Container/Container";
import './Main.style.scss'
import CoinBox from "../CoinBox/CoinBox";
import {useEffect, useState} from "react";
import {manageCoinData} from "../../ApiServices/ApiServices";



const Main = () => {
    const [coins , setCoins] = useState([]);
    const TopCoins = coins.slice(0 , 3);
    const TopCoinsRow1 = coins.slice(4 , 7);
    const TopCoinsRow2  = coins.slice(8 , 11);
    const TopCoinsRow3  = coins.slice(12 , 15);

    useEffect(()=>{
        manageCoinData().then(res => setCoins(res));
    } , [])
  return(
      <Container>
          <div className={'mainIndex'}>
              <div className={'title'}>
                  <h2>
                      {'Top Coin'}
                  </h2>
              </div>
              <div className={"card"}>
                  {
                      TopCoins.map(item =>(
                          <CoinBox title={item.name} symbol={item.symbol} change={item.change} price={item.price}/>
                      ))
                  }
              </div>
              <div className={''} style={{color:"black"}}>
                  <h2>
                      {'10 Top Coin'}
                  </h2>
              </div>
              <div className={"card"}>
                  {
                      TopCoinsRow1.map(item =>(
                          <CoinBox title={item.name} symbol={item.symbol} change={item.change} price={item.price}/>
                      ))
                  }
              </div>
              <div className={"card"}>
                  {
                      TopCoinsRow2.map(item =>(
                          <CoinBox title={item.name} symbol={item.symbol} change={item.change} price={item.price}/>
                      ))
                  }
              </div>
              <div className={"card"}>
                  {
                      TopCoinsRow3.map(item =>(
                          <CoinBox title={item.name} symbol={item.symbol} change={item.change} price={item.price}/>
                      ))
                  }
              </div>
          </div>
      </Container>
  )
}


export default Main;