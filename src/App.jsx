import './App.css';
import AccordionCard from "./components/AccordionCard.jsx";
import data from "./utils/data.json";

function App() {

  return (
    <div className="bg-light_pink w-full min-h-screen font-work_sans absolute">
      <div className="image-container w-full h-72"/>

      <main className="relative w-[90%] mx-auto bg-white left-0 right-0 -top-[100px] px-7 pt-6 rounded-lg shadow-[0px_10px_20px_hsla(292,42%,14%,0.1)] md:w-[600px] md:px-10 md:pb-5 md:pt-11 md:-top-[150px] md:rounded-2xl">

        <div className="flex md:pb-5">
          <img src="/faq-accordion/icon-star.svg" alt="Star" className="w-7 md:w-9"/>
          <h1 className="text-3xl font-bold ml-6 text-dark_purple md:text-6xl">FAQs</h1>
        </div>

        <div>
          {data && data.map((item) => (
            <AccordionCard key={item} heading={item.heading} content={item.content}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App;
