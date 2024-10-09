import { BackgroundGradientAnimation } from "./components/background-gradient-animation"


function App() {

  let ParaText = "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
  let mainDiv = "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"

  
  return (
    <>
      <BackgroundGradientAnimation interactive = {false}>
        <div className={mainDiv}>
          <p className= {ParaText}>
            Welcome!
          </p>
        </div>
      </BackgroundGradientAnimation>
    </>
  )
}

export default App
