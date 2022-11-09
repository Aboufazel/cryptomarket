

import Root from "./router/Root";
import GetCoinData from "./components/GetCoinData/GetCoinData";
import SendApi from "./components/GetCoinData/SendApi";



function App() {
  return (
         <>
           <Root/>
           <GetCoinData/>
             <SendApi/>
         </>
  );
}

export default App;
