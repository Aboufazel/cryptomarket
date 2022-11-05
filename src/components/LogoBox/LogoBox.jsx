import cryptoLogo from "../../assets/pics/logo.png"
import "./LogoBox.style.scss"


const LogoBox = () => {

    return(
        <div className={'logoBox'}>
            <div className={'avatar'}>
                <img src={cryptoLogo} alt={'webLogo'}/>
            </div>
             <div className={'title'}>
                 <h4>
                     {"Crypto Market"}
                 </h4>
             </div>
        </div>
    )
}


export default LogoBox;