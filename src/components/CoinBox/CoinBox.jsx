import btc from "../../assets/coinlogo/bitcoin-btc-logo.png";
import "./CoinBox.style.scss"

const CoinBox = () => {
  return(
      <div className={'coinBox'}>
          <div className={'left'}>
              <div className={'logo'}>
                  <img src={btc} alt={'btcLogo'}/>
              </div>
              <div className={'coinName'}>
                  <h5>
                      {"Bitcoin"}
                  </h5>
                  <p>
                      {"BTC"}
                  </p>
              </div>
          </div>
          <div className={'right'}>
              <div className={'percent'}>
                  {"12%"}
              </div>
              <div className={'price'}>
                  {"21450$"}
              </div>
          </div>
      </div>
  )
}


export default CoinBox;