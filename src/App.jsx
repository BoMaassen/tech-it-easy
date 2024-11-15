import './App.css';
import alreadySold from "./helpers/alreadySold.js";
import purchased from "./helpers/purchased.js";
import forSale from "./helpers/forSale.js";
import nameTv from "./helpers/nameTv.js";
import {bestSellingTv} from "./constants/inventory.js";
import priceConverter from "./helpers/priceConverter.js";
import sizes from "./helpers/sizes.js";
import check from './assets/check.png';
import minus from './assets/minus.png';
import tv from './assets/tv.png'
import {inventory} from "./constants/inventory.js";

function App() {
    function youClickedMostSold() {
        console.log("Meest verkocht eerst")
    }

    function youClickedCheap() {
        console.log("Goedkoopste eerst")
    }

    function youClickedMostSport() {
        console.log("Meest geschikt voor sport eerst")
    }

    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="stats">
                    <div className="sold-tv stats-blok">
                        <p>Aantal verkochte producten</p>
                        <p>{alreadySold(inventory)}</p>
                    </div>
                    <div className="purchased-tv stats-blok">
                        <p>Aantal ingekochte producten</p>
                        <p>{purchased(inventory)}</p>
                    </div>
                    <div className="for-sale-tv stats-blok">
                        <p>Aantal te verkopen producten</p>
                        <p>{forSale(inventory)}</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Best verkochte tv</h2>
                <div className="best-sold-block">
                <span className="tv-img">
                <img src={tv} alt="Samsung tv"/>
                </span>
                    <div className="best-sold-info">
                        <h3>{nameTv(bestSellingTv)}</h3>
                        <p>{priceConverter(bestSellingTv)}</p>
                        <p>{sizes(bestSellingTv.availableSizes)}</p>
                        <p><img src={check} alt="check icoon"/> wifi <img src={minus} alt="minus icoon"/> speech <img
                            src={check} alt="check icoon"/> hdr <img src={check} alt="check icoon"/> bluethoot <img
                            src={minus} alt="minus icoon"/> ambilight</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <ul>
                    {inventory.map((brandNames) => {
                        return <li key={brandNames.type}>{brandNames.brand}</li>
                    })}
                </ul>
                <button type="button" onClick={youClickedMostSold}>Meest verkocht eerst</button>
                <button type="button" onClick={youClickedCheap}>Goedkoopste eerst</button>
                <button type="button" onClick={youClickedMostSport}>Meest geschikt voor sport eerst</button>
                <div>
                    {inventory.map((inventorie) => {
                        return <div className="best-sold-info" key={inventorie.type}>
                            <h3>{nameTv(inventorie)}</h3>
                            <p>{priceConverter(inventorie)}</p>
                            <p>{sizes(inventorie.availableSizes)}</p>
                            <ul>
                                {inventorie.options.map((optie) => {
                                    if (optie.applicable === true) {
                                        return <li key={inventorie.type}><img src={check}
                                                                              alt="check icoon"/>{optie.name}</li>
                                    } else return <li key={inventorie.type}><img src={minus}
                                                                                 alt="minus icoon"/>{optie.name}</li>

                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default App
