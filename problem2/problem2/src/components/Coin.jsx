import ZIL from '../assets/icon/ZIL.svg';
import ampLUNA from '../assets/icon/ampLUNA.svg';
import ATOM from '../assets/icon/ATOM.svg';
import axlUSDC from '../assets/icon/axlUSDC.svg';
import BLUR from '../assets/icon/BLUR.svg';
import bNEO from '../assets/icon/bNEO.svg';
import BUSD from '../assets/icon/BUSD.svg';
import ETH from '../assets/icon/ETH.svg';
import EVMOS from '../assets/icon/EVMOS.svg';
import GMX from '../assets/icon/GMX.svg';
import IBCX from '../assets/icon/IBCX.svg';
import IRIS from '../assets/icon/IRIS.svg';
import KUJI from '../assets/icon/KUJI.svg';
import LSI from '../assets/icon/LSI.svg';
import LUNA from '../assets/icon/LUNA.svg';
import OKB from '../assets/icon/OKB.svg';
import OKT from '../assets/icon/OKT.svg';
import OSMO from '../assets/icon/OSMO.svg';
import rATOM from '../assets/icon/rATOM.svg';
import rSWTH from '../assets/icon/rSWTH.svg';
import stATOM from '../assets/icon/stATOM.svg';
import stEVMOS from '../assets/icon/stEVMOS.svg';
import stLUNA from '../assets/icon/stLUNA.svg';
import stOSMO from '../assets/icon/stOSMO.svg';
import STRD from '../assets/icon/STRD.svg';
import SWTH from '../assets/icon/SWTH.svg';
import USC from '../assets/icon/USC.svg';
import USD from '../assets/icon/USD.svg';
import USDC from '../assets/icon/USDC.svg';
import WBTC from '../assets/icon/WBTC.svg';
import wstETH from '../assets/icon/wstETH.svg';
import YieldUSD from '../assets/icon/YieldUSD.svg';

export default function Coin({ props }) {
    let iconComponent;
    let iconSize = 30; // Set the size of the icons here

    switch (props.currency) {
        case 'ZIL':
            iconComponent = <img src={ZIL} alt='ZIL Logo' width={iconSize} height={iconSize} />;
            break;
        case 'ampLUNA':
            iconComponent = <img src={ampLUNA} alt='ampLUNA Logo' width={iconSize} height={iconSize} />;
            break;
        case 'ATOM':
            iconComponent = <img src={ATOM} alt='ATOM Logo' width={iconSize} height={iconSize} />;
            break;
        case 'axlUSDC':
            iconComponent = <img src={axlUSDC} alt='axlUSDC Logo' width={iconSize} height={iconSize} />;
            break;
        case 'BLUR':
            iconComponent = <img src={BLUR} alt='BLUR Logo' width={iconSize} height={iconSize} />;
            break;
        case 'bNEO':
            iconComponent = <img src={bNEO} alt='bNEO Logo' width={iconSize} height={iconSize} />;
            break;
        case 'BUSD':
            iconComponent = <img src={BUSD} alt='BUSD Logo' width={iconSize} height={iconSize} />;
            break;
        case 'ETH':
            iconComponent = <img src={ETH} alt='ETH Logo' width={iconSize} height={iconSize} />;
            break;
        case 'EVMOS':
            iconComponent = <img src={EVMOS} alt='EVMOS Logo' width={iconSize} height={iconSize} />;
            break;
        case 'GMX':
            iconComponent = <img src={GMX} alt='GMX Logo' width={iconSize} height={iconSize} />;
            break;
        case 'IBCX':
            iconComponent = <img src={IBCX} alt='IBCX Logo' width={iconSize} height={iconSize} />;
            break;
        case 'IRIS':
            iconComponent = <img src={IRIS} alt='IRIS Logo' width={iconSize} height={iconSize} />;
            break;
        case 'KUJI':
            iconComponent = <img src={KUJI} alt='KUJI Logo' width={iconSize} height={iconSize} />;
            break;
        case 'LSI':
            iconComponent = <img src={LSI} alt='LSI Logo' width={iconSize} height={iconSize} />;
            break;
        case 'LUNA':
            iconComponent = <img src={LUNA} alt='LUNA Logo' width={iconSize} height={iconSize} />;
            break;
        case 'OKB':
            iconComponent = <img src={OKB} alt='OKB Logo' width={iconSize} height={iconSize} />;
            break;
        case 'OKT':
            iconComponent = <img src={OKT} alt='OKT Logo' width={iconSize} height={iconSize} />;
            break;
        case 'OSMO':
            iconComponent = <img src={OSMO} alt='OSMO Logo' width={iconSize} height={iconSize} />;
            break;
        case 'RATOM':
            iconComponent = <img src={rATOM} alt='rATOM Logo' width={iconSize} height={iconSize} />;
            break;
        case 'rSWTH':
            iconComponent = <img src={rSWTH} alt='rSWTH Logo' width={iconSize} height={iconSize} />;
            break;
        case 'STATOM':
            iconComponent = <img src={stATOM} alt='stATOM Logo' width={iconSize} height={iconSize} />;
            break;
        case 'STEVMOS':
            iconComponent = <img src={stEVMOS} alt='stEVMOS Logo' width={iconSize} height={iconSize} />;
            break;
        case 'STLUNA':
            iconComponent = <img src={stLUNA} alt='stLUNA Logo' width={iconSize} height={iconSize} />;
            break;
        case 'STOSMO':
            iconComponent = <img src={stOSMO} alt='stOSMO Logo' width={iconSize} height={iconSize} />;
            break;
        case 'STRD':
            iconComponent = <img src={STRD} alt='STRD Logo' width={iconSize} height={iconSize} />;
            break;
        case 'SWTH':
            iconComponent = <img src={SWTH} alt='SWTH Logo' width={iconSize} height={iconSize} />;
            break;
        case 'USC':
            iconComponent = <img src={USC} alt='USC Logo' width={iconSize} height={iconSize} />;
            break;
        case 'USD':
            iconComponent = <img src={USD} alt='USD Logo' width={iconSize} height={iconSize} />;
            break;
        case 'USDC':
            iconComponent = <img src={USDC} alt='USDC Logo' width={iconSize} height={iconSize} />;
            break;
        case 'WBTC':
            iconComponent = <img src={WBTC} alt='WBTC Logo' width={iconSize} height={iconSize} />;
            break;
        case 'wstETH':
            iconComponent = <img src={wstETH} alt='wstETH Logo' width={iconSize} height={iconSize} />;
            break;
        case 'YieldUSD':
            iconComponent = <img src={YieldUSD} alt='YieldUSD Logo' width={iconSize} height={iconSize} />;
            break;
        default:
            iconComponent = null;
    }

    return (
        <div className="flex justify-center items-center gap-2">
            {iconComponent}
            <label className="text-white font-bold">{props && props.currency}</label>
        </div>
    );
}
