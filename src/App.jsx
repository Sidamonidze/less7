import { useState } from "react";
import "./App.css";

function App() {

  const images = [
    "https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-LAPTOPS-PHOTO-VIDEO-EDITING-2048px-6.jpg",
    "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-4.fill.size_2000x1125.v1723100793.jpg",
    "https://www.hardwarezone.com.sg/thumbs/711411/a.jpg",
    "https://www.apple.com/v/macbook-air/s/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-001-3000x1682:VP2-859x540",
  ];
  const [ricxvi, setRicxvi] = useState(images[0]);
  return (
    <div>
      <div>
        <img src={ricxvi} alt="" className="k2"/>
      </div>
      <div className="k1">
        <img src={images[0]} alt="" onClick={() => setRicxvi(images[0])} />
        <img src={images[1]} alt="" onClick={() => setRicxvi(images[1])} />
        <img src={images[2]} alt="" onClick={() => setRicxvi(images[2])} />
        <img src={images[3]} alt="" onClick={() => setRicxvi(images[3])} />
        <img src={images[4]} alt="" onClick={() => setRicxvi(images[4])} />
      </div>
    </div>
  );
}

export default App;