import "./CoinBox.style.scss"
import LOGO from '../../assets/pics/logo.png'
import BTC from '../../assets/coinlogo/bitcoin-btc-logo.png';
import ETH from '../../assets/coinlogo/ethereum-eth-logo.png';
import USDT from '../../assets/coinlogo/tether-usdt-logo.png';
import BUSD from '../../assets/coinlogo/binance-usd-busd-logo.png';
import MATIC from '../../assets/coinlogo/polygon-matic-logo.png';
import ADA from '../../assets/coinlogo/cardano-ada-logo.png';
import XRP from '../../assets/coinlogo/xrp-xrp-logo.png';
import BNB from '../../assets/coinlogo/bnb-bnb-logo.png';
import DOT from '../../assets/coinlogo/polkadot-new-dot-logo.png';
import DAI from '../../assets/coinlogo/multi-collateral-dai-dai-logo.png';
import SHIB from '../../assets/coinlogo/shiba-inu-shib-logo.png';
import OKB from '../../assets/coinlogo/okb-okb-logo.png';

export const CoinSymbol = [
    {name : 'BTC' , pic: BTC},
    {name : 'ETH' , pic: ETH},
    {name : 'USDT' , pic: USDT},
    {name : 'BNB' , pic: BNB},
    {name : 'BUSD' , pic: BUSD},
    {name : 'XRP' , pic: XRP},
    {name : 'ADA' , pic: ADA},
    {name : 'MATIC' , pic: MATIC},
    {name : 'DOT' , pic: DOT},
    {name : 'DAI' , pic: DAI},
    {name : 'SHIB' , pic: SHIB},
    {name : 'OKB' , pic: OKB},
]


const CoinBox = ({title , symbol , price , change ,pic}) => {
  return(
      <div className={'coinBox'}>
          <div className={'left'}>
              <div className={'logo'}>
                  <img src={pic} alt={'cryptoLogo'}/>
              </div>
              <div className={'coinName'}>
                  <h5>
                      {title}
                  </h5>
                  <p>
                      {symbol}
                  </p>
              </div>
          </div>
          <div className={'right'}>
              <div className={change > 0 ? 'greenPercent' : 'redPercent'}>
                  {`${change}%`}
              </div>
              <div className={'price'}>
                 <p>
                     {`${price} USDT`}
                 </p>
              </div>
          </div>
      </div>
  )
}


export default CoinBox;