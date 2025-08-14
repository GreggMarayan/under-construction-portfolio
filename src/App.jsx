import { BackgroundGradientAnimation } from "./components/background-gradient-animation"
import Dock from "../src/blocks/Components/Dock/Dock"
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc"
function App() {

  let ParaText = "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
  let mainDiv = "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];



  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BackgroundGradientAnimation interactive={true}>
        <div className={mainDiv}>
          <p className={ParaText}>
            Welcome to my portfolio!
          </p>
        </div>
      </BackgroundGradientAnimation>
      
      <div className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={48}
            magnification={64}
            className="bg-white/20 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/10"
          />
        </div>
      </div>
    </div>
  )
}

export default App
