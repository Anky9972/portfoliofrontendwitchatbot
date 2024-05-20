import React from 'react'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Bot from './components/Bot'

function Home({isOn}) {
  return (
    <div>
        <div id="main">
          <Main isOn={isOn} />
        </div>
        <Bot isOn={isOn}/>
        <div id="about" >
          <About isOn={isOn} />
        </div>
        <div id="projects" >
          <Projects isOn={isOn}/>
        </div>
    </div>
  )
}

export default Home