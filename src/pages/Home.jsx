import FaultyTerminal from "../blocks/Backgrounds/FaultyTerminal/FaultyTerminal"


function Home() {

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <FaultyTerminal
          scale={2}
          gridMul={[2, 1]}
          digitSize={1.5}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.13}
          tint="A7EF9E"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6}
        />
      </div>
    </>

  )
}

export default Home
