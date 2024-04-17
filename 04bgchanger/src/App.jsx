import { useState,useEffect } from "react"


function App() {
  const [color, setcolor] = useState("olive")
  const [discoMode, setDiscoMode] = useState(false);

  useEffect(() => {
    if (discoMode) {
      const intervalId = setInterval(() => {
        setcolor(genColor());
      }, 250); // Change color every second (1000 milliseconds)
      
      return () => clearInterval(intervalId); // Clean up the interval when component unmounts or discoMode is turned off
    }
  }, [discoMode]);

  const genColor = () => {
    const option = ["Red", "Green", "Blue", "Pink", "violet"];
    const randIdx = Math.floor(Math.random() * 5);
    return option[randIdx];
  }
  
  const disco = () => {
    setDiscoMode(!discoMode); // Toggle discoMode
  };

  


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setcolor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setcolor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={disco}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              Disco
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
