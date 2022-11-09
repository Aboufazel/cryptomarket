import Container from "../Container/Container";
import SecondCoinBox from "../CoinBox/SecondCoinBox";



const CoinDetail = () => {
  return(
      <Container>
          <div className={'CoinDetailHeader'}>
            <SecondCoinBox/>
          </div>
      </Container>
  )
}

export default CoinDetail;