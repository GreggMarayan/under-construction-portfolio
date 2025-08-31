import React from 'react'
import DotGrid from '../blocks/Backgrounds/DotGrid/DotGrid'

function About() {
  return (
    <div style={{ width: '100vh', height: '100vh', position: 'relative' }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={75}
        shockRadius={0}
        shockStrength={0}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  )
}

export default About