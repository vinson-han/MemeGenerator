import { useState, useEffect } from "react";
import "../style.css";
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    img: "",
  });
  const [allMemes, setAllMemes] = useState("");
  const [random, setRandom] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        setMeme({ ...data.data.memes, img: data.data.memes[random].url });
      });
  }, []);

  const generateRandomNumber = (e) => {
    e.preventDefault();
    setRandom(Math.floor(Math.random() * allMemes.length));
    setMeme({ ...meme, img: allMemes[random].url });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme({ ...meme, [name]: value });
  };

  return (
    <main>
      <form className="form" onSubmit={generateRandomNumber}>
        <input
          placeholder="Top Text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />{" "}
        <input
          placeholder="Bottom Text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button">Get an new Meme Image</button>
      </form>
      <div className="meme">
        <img
          src={allMemes.length > 0 ? meme.img : ""}
          alt="random Meme"
          className="meme--image"
        />
        {}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
