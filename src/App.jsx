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
    const sorting = inventory.map((inventorie) => {
        return inventorie
    })

    function youClickedMostSold() {
        console.log("Meest verkocht eerst")

        sorting.sort((a, b) => b.sold - a.sold)
        console.log(sorting)
    }

    function youClickedCheap() {
        console.log("Goedkoopste eerst")
        sorting.sort((a, b) => a.price - b.price)
        console.log(sorting)
    }

    function youClickedMostSport() {
        console.log("Meest geschikt voor sport eerst")
        sorting.sort((a, b) => b.refreshRate - a.refreshRate)
        console.log(sorting)
    }

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>
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
                <div className="best-sold-block tv-block">
                <span className="tv-img">
                <img src={bestSellingTv.sourceImg} alt="Samsung tv"/>
                </span>
                    <div className="best-sold-info tv-info">
                        <h3>{nameTv(bestSellingTv)}</h3>
                        <p>{priceConverter(bestSellingTv)}</p>
                        <p>{sizes(bestSellingTv.availableSizes)}</p>
                        <p><img className="icon" src={check} alt="check icoon"/> wifi <img className="icon" src={minus} alt="minus icoon"/> speech <img className="icon"
                            src={check} alt="check icoon"/> hdr <img className="icon" src={check} alt="check icoon"/> bluethoot <img className="icon"
                            src={minus} alt="minus icoon"/> ambilight</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <div>
                <button type="button" onClick={youClickedMostSold}>Meest verkocht eerst</button>
                <button type="button" onClick={youClickedCheap}>Goedkoopste eerst</button>
                <button type="button" onClick={youClickedMostSport}>Meest geschikt voor sport eerst</button>
                </div>
                <div>
                    {inventory.map((inventorie) => {
                        return <div key={inventorie.id} className="tv-block">
                              <span className="tv-img">
                                  <img src={inventorie.sourceImg} alt="Samsung tv"/>
                             </span>
                            <div className="tv-info">
                                <h3>{nameTv(inventorie)}</h3>
                                <p>{priceConverter(inventorie)}</p>
                                <p>{sizes(inventorie.availableSizes)}</p>
                                <ul>
                                    {inventorie.options.map((optie) => {
                                        if (optie.applicable === true) {
                                            return <li key={optie.name}><img className="icon" src={check} alt="check icoon"/>{optie.name}
                                            </li>
                                        } else return <li key={optie.name}><img className="icon" src={minus}
                                                                                alt="minus icoon"/>{optie.name}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>
            </section>
            <footer>
                <ul>
                    {inventory.map((brandNames) => {
                        return <li key={brandNames.type}>{brandNames.brand}</li>
                    })}
                </ul>
            </footer>
        </>
    )
}

export default App
