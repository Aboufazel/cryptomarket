import "./CoinBox.style.scss"
import btc from "../../assets/coinlogo/bitcoin-btc-logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import Container from "../Container/Container";

const SecondCoinBox = ({name , symbol , price , volume , pic , percent}) => {
    console.log(percent)
  return(
       <Container>
           <div className={'main'}>
               <div className={'secondCoinBox'}>
                   <div className={'coinLogo'}>
                       <img src={pic} alt={'coinicon'}/>
                   </div>
                   <div className={'coinInfo'}>
                       <h2>
                           {name}
                       </h2>
                       <p>
                           {`${symbol} / USDT`}
                       </p>
                   </div>
                   <div className={'likeBox'}>
                       <FontAwesomeIcon icon={faHeart}/>
                   </div>
               </div>
               <div className={'priceBox'}>
                    <div className={'priceInfo'}>
                        <h4 className={percent > 0 ? "GreenPrice" : "RedPrice" }>
                            {'$'}
                        </h4>
                        <h6 className={percent > 0 ? "GreenPrice" : "RedPrice" }>
                            {price}
                        </h6>
                    </div>
                   <div className={'volume'}>
                       <p style={{color:"red"}}>
                           {'MarketCap:'}
                       </p>
                       <p style={{color:"black"}}>
                           {`${volume}USDT`}
                       </p>
                   </div>
               </div>
               <div>
                   <h2>
                       {"Chart"}
                   </h2>
                   <p>
                       {"Chart is coming Soon"}
                   </p>
               </div>
           </div>
       </Container>
  )
}


export default SecondCoinBox;