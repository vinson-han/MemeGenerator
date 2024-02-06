import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const randomImage = fetch("https://api.humorapi.com/memes/random");
  console.log(randomImage);
  return (
    <div>
      <Header></Header>
      <Meme></Meme>
    </div>
  );
}

export default App;
