import Coin from "./Coin";

export default function CoinList({ props }) {
    return (
        <div className="flex flex-col overflow-y-auto gap-5 items-start" style={{ maxHeight: '805' }}>
            {props && props.map((e, index) => (
                <div key={index}
                    className="flex flex-1 justify-start items-center gap-2 p-2 w-[95%] bg-black/70 rounded-md">
                    {index}
                    <Coin props={e} />
                    {'Price: ' + e.price}
                </div>
            ))}
        </div>
    );
}
