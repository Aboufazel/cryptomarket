import "./CoinBox.style.scss"
import btc from "../../assets/coinlogo/bitcoin-btc-logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import Container from "../Container/Container";

const SecondCoinBox = () => {
  return(
       <Container>
           <div className={'main'}>
               <div className={'secondCoinBox'}>
                   <div className={'coinLogo'}>
                       <img src={btc} alt={'btcLogo'}/>
                   </div>
                   <div className={'coinInfo'}>
                       <h2>
                           {'Bitcoin'}
                       </h2>
                       <p>
                           {'BTC / USD'}
                       </p>
                   </div>
                   <div className={'likeBox'}>
                       <FontAwesomeIcon icon={faHeart}/>
                   </div>
               </div>
               <div className={'priceBox'}>
                    <div className={'priceInfo'}>
                        <h4>
                            {'$'}
                        </h4>
                        <h2>
                            {'19870'}
                        </h2>
                    </div>
                   <div className={'volume'}>
                       {'24h volume'}
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