import {useEffect, useState} from "react";
import axios from "axios";
import SendApi from "./SendApi";


const GetCoinData = () => {

   const [symbol , setSymbol] = useState(null)
    useEffect(() => {
        const Axios = require("axios");
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                timePeriod: '24h',
                'tiers[0]': '1',
                orderBy: 'marketCap',
                orderDirection: 'desc',
                limit: '50',
                offset: '0'
            },
            headers: {
                'X-RapidAPI-Key': '900303f6f5msh4e980ee85f1f7a2p18b5dajsn0215f29b1388',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
             try {
                 setSymbol(response.data);
             }catch (e){
                 console.log('get data have problem')
             }
        })

    }, [])

   try {
       return(
           <SendApi data={symbol}/>
       )

   }catch (e){
       console.log("send data have problems")
   }

}
export default GetCoinData;