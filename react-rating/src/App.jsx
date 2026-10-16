const App = () => {

  const [nota, setNota] = useState(null)
  const [monstrarNota, setMostarNota] = useState(false)

  return ( 
  <div className="bg-stone-950 h-screen flex justify-center items-center">
    <div className="w-80 bg-linear-to-b from-slate-900 to-slate-950 p-6 rounded-4x1">
        {
          monstrarNota ? (
            <>
              <div className="w-h25 h-25 rounded-full border-2 border-white/50 text-white m-auto my-15 flex justify-center items-center">
                <luCheckCheck size={50} />
              </div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center">
              </div>
              <h3 className="text-white text-x1 font-semibold mb-3">Escolha uma nota</h3>
              <p className="text-xs text-white/50 nb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dolor earum voluptate inventore tempora maxime assumenda delectus dicta odit optio, ex veniam deleniti sunt repudiandae voluptates deserunt a aliquid.</p>
              <div className="flex justify-between *:w-10 *:h-10 *:bg-white/20 *:rounded-full *:flex *:justify-center *:items-center *:text-white *:hover:bg-orange-500 *:duration-200 *:cursor-pointer *:[&.active];bg-orange-500">
                <button
                    onClick={() => setNota(1)}
                    className={nota == 1 ? "active" : ""}>1</button>
                <button
                    onClick={() => setNota(2)}
                    className={nota == 2 ? "active" : ""}>2</button>
                <button
                    onClick={() => setNota(3)}
                    className={nota == 3 ? "active" : ""}>3</button>
                <button
                    onClick={() => setNota(4)}
                    className={nota == 4 ? "active" : ""}>4</button>
                <button
                    onClick={() => setNota(5)}
                    className={nota == 5 ? "active" : ""}>5</button>
              </div>
              <button className="w-full h-10 bg-white/10 rounded-full flex justify-center items-center text-white hover:bg-orange-500 duration-200 cursor-pointer mt-4">Enviar</button>
            </>
          )
        }
      </div>
    </div>
   );
}
 
export default App;