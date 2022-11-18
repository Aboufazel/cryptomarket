import btc from "../../assets/coinlogo/bitcoin-btc-logo.png";
import "./CoinBox.style.scss"

const CoinBox = ({title , symbol , price , change}) => {
  return(
      <div className={'coinBox'}>
          <div className={'left'}>
              <div className={'logo'}>
                  <img src={btc} alt={'btcLogo'}/>
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