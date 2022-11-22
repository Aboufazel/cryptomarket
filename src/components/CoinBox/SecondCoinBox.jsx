import "./CoinBox.style.scss"
import TradingViewWidget from 'react-tradingview-widget';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import Container from "../Container/Container";
import {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const SecondCoinBox = ({name, symbol, price, volume, pic, percent}) => {
    const [loading, setLoading] = useState(true);
    const [like , setLike] = useState("black")
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 6000)
    }, []);


    const manageLike = () =>{
        like === "black" ? setLike("red") : setLike("black")
    }

    console.log(percent)
    return (
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
                    <div className={'likeBox'} onClick={manageLike}>
                        <FontAwesomeIcon style={{color:like , padding:12 , borderRadius:50}} icon={faHeart}/>
                    </div>
                </div>
                <div className={'priceBox'}>
                    <div className={'priceInfo'}>
                        <h4 className={percent > 0 ? "GreenPrice" : "RedPrice"}>
                            {'$'}
                        </h4>
                        <h6 className={percent > 0 ? "GreenPrice" : "RedPrice"}>
                            {price}
                        </h6>
                    </div>
                    <div className={'volume'}>
                        <p style={{color: "red"}}>
                            {'MarketCap:'}
                        </p>
                        <p style={{color: "black"}}>
                            {`${volume}`}
                            <span style={{color:"green" , paddingLeft:5 , fontSize:18}}>
                                {'$'}
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <h2>
                        {"Chart"}
                    </h2>
                    {
                        loading ? <Stack>
                            <Skeleton sx={{marginRight: 5, borderRadius: 4}} variant="rectangular" width={850}
                                      height={550} animation={"wave"}/>
                        </Stack> : <TradingViewWidget symbol="Binance:BTCUSDT" range='10m'/>
                    }
                </div>
            </div>
        </Container>
    )
}


export default SecondCoinBox;