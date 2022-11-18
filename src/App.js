import Root from "./router/Root";
import CoinContextProvider from "./components/Context/Context";


function App() {
    return (
        <CoinContextProvider>
            <Root/>
        </CoinContextProvider>
    );
}

export default App;
