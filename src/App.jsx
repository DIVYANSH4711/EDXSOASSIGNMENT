import { useState } from "react"

function App() {
  const [order, setOrder] = useState([])
  const [id1, setId1] = useState("zinc")
  const [id2, setId2] = useState("zinc")
  const [id3, setId3] = useState("zinc")
  const [id4, setId4] = useState("zinc")
  const [id5, setId5] = useState("zinc")
  const [id6, setId6] = useState("zinc")
  const [id7, setId7] = useState("zinc")
  const [id8, setId8] = useState("zinc")

  const turnToOrange = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (let i = 0; i < order.length; ++i) {
      switch (order[i]) {
        case 1: setId1("orange"); break;
        case 2: setId2("orange"); break;
        case 3: setId3("orange"); break;
        case 4: setId4("orange"); break;
        case 5: setId5("orange"); break;
        case 6: setId6("orange"); break;
        case 7: setId7("orange"); break;
        case 8: setId8("orange"); break;
        default: break;
      }
      await delay(200)
    }
    setOrder([]);
  };
  
  
  return (
    <>
      <div className="min-h-screen min-w-screen bg-black flex justify-center items-center">
        <div className="border-2 border-zinc-400 rounded-md">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div
              className={`${id1 == 'zinc' ? 'bg-zinc-100' : (id1 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId1("green"); setOrder(prev => [...prev, 1]); }}
            >
              1
            </div>
            <div 
              className={`${id2 == 'zinc' ? 'bg-zinc-100' : (id2 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId2("green"); setOrder(prev => [...prev, 2]); }}
            >
              2
            </div>
            <div 
              className={`${id3 == 'zinc' ? 'bg-zinc-100' : (id3 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId3("green"); setOrder(prev => [...prev, 3]); }}
            >
                3
            </div>
            <div 
              className={`${id4 == 'zinc' ? 'bg-zinc-100' : (id4 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId4("green"); setOrder(prev => [...prev, 4]); }}
            >
              4
            </div>
            <div 
              className={`${id5 == 'zinc' ? 'bg-zinc-100' : (id5 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId5("green"); setOrder(prev => [...prev, 5]); }}
            >
              5
            </div>
            <div 
              className={`${id6 == 'zinc' ? 'bg-zinc-100' : (id6 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId6("green"); setOrder(prev => [...prev, 6]); }}
            >
              6
            </div>
            <div 
              className={`${id7 == 'zinc' ? 'bg-zinc-100' : (id7 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId7("green"); setOrder(prev => [...prev, 7]); }}
            >
              7
            </div>
            <div 
              className={`${id8 == 'zinc' ? 'bg-zinc-100' : (id8 == 'green' ? 'bg-green-500' : 'bg-orange-400')} cursor-pointer rounded-sm  p-6 text-center transition-colors duration-300`}
              onClick={() => { setId8("green"); setOrder(prev => [...prev, 8]); }}
            >
              8
            </div>
            <div 
              className={`bg-red-400 rounded-sm  p-6 text-center cursor-pointer `}
              onClick={ () => { turnToOrange() }}
            >
              9
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
