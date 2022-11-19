import Container from "../Container/Container";
import SecondCoinBox from "../CoinBox/SecondCoinBox";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {manageCoinData} from "../../ApiServices/ApiServices";
import {CircularProgress} from "@mui/material";



const CoinDetail = () => {
    const [coins , setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams();


   const manageParams = async ()=>{
    const Data = await  manageCoinData()
    setCoins(Data.filter(item => item.name === coinId))
       console.log(Data)
   }


    useEffect(() => {
         manageParams()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])



   try {
       return(
           loading ? <CircularProgress color={"warning"}/> :<Container>
               {
                   coins.map(item => (
                       <div className={'CoinDetailHeader'}>
                           <SecondCoinBox percent={item.change} name={item.name} symbol={item.symbol} volume={item.marketCap} price={item.price} pic={item.iconUrl}/>
                       </div>
                   ))
               }
           </Container>
       )
   }catch (e) {
       console.log('بارگذاری صفحه با خطا مواجه شد')
   }

}

export default CoinDetail;