import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="mb-4 bg-green-400 text-black p-4 rounded-xl" >Tailwind Test</h1>
      <Cards username="Pranta Saha" btntext="Find More"/>
      <Cards username="Sanchita Saha" btntext="Right there"/>
    </>
  );
}

export default App;
