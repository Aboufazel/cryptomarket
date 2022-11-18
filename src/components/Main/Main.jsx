import Container from "../Container/Container";
import './Main.style.scss'
import CoinBox from "../CoinBox/CoinBox";
import {useContext, useEffect, useState} from "react";
import {manageCoinData} from "../../ApiServices/ApiServices";
import {Link} from "react-router-dom";
import {CoinContext} from "../Context/Context";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const Main = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true)
    const TopCoins = coins.slice(0, 3);
    const TopCoinsRow1 = coins.slice(4, 7);
    const TopCoinsRow2 = coins.slice(8, 11);
    const TopCoinsRow3 = coins.slice(12, 15);



    useEffect(() => {
        manageCoinData().then(res => setCoins(res));

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <Container>
            <div className={'mainIndex'}>
                <div className={'title'}>
                    <h2>
                        {'Top Value Coin'}
                    </h2>
                </div>
                {
                    loading ?
                        <div className={"card"}>
                            <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85}
                                      animation={"wave"}/>
                            <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85}
                                      animation={"wave"}/>
                            <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85}
                                      animation={"wave"}/>
                        </div>
                        : <div className={"card"}>
                            {
                                TopCoins.map(item => (
                                    <Link to={`coin/${item.name}`}>
                                        <CoinBox title={item.name} symbol={item.symbol} change={item.change}
                                                 price={item.price} pic={item.iconUrl}/>
                                    </Link>
                                ))
                            }
                        </div>
                }
                <div className={''} style={{color: "black"}}>
                    <h2>
                        {'10 Top Coin'}
                    </h2>
                </div>
                {loading ? <div className={"card"}>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                </div> : <div className={"card"}>
                    {
                        TopCoinsRow1.map(item => (
                            <Link to={`coin/${item.name}`}>
                                <CoinBox title={item.name} symbol={item.symbol} change={item.change}
                                         price={item.price} pic={item.iconUrl}/>
                            </Link>
                        ))
                    }
                </div>}
                {loading ? <div className={"card"}>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                </div> : <div className={"card"}>
                    {
                        TopCoinsRow2.map(item => (
                            <Link to={`coin/${item.name}`}>
                                <CoinBox title={item.name} symbol={item.symbol} change={item.change}
                                         price={item.price} pic={item.iconUrl}/>
                            </Link>
                        ))
                    }
                </div>}
                {loading ? <div className={"card"}>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                    <Skeleton sx={{marginRight: 5 , borderRadius:4}} variant="rectangular" width={360} height={85} animation={"wave"}/>
                </div> : <div className={"card"}>
                    {
                        TopCoinsRow3.map(item => (
                            <Link to={`coin/${item.name}`}>
                                <CoinBox title={item.name} symbol={item.symbol} change={item.change}
                                         price={item.price} pic={item.iconUrl}/>
                            </Link>
                        ))
                    }
                </div>}
            </div>
        </Container>
    )
}


export default Main;