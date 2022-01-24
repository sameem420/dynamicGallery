import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);

  const fetchNewImage = () => {
    setImages([
      ...images,
      {
        url: `https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images} />
      </div>
      <div className="btnContainer">
        <button onClick={removeImage}>Remove</button>
        <button onClick={fetchNewImage}>Add</button>
      </div>
    </section>
  );
}

export default App;
