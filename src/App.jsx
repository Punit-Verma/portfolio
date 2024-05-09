import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Awards from "./Components/Awards"
import Services from "./Components/Services"
import Portfolio from "./Components/Portfolio"
import Experience from "./Components/Experience"

function App() {
  return (
    <div className="font-raleway">
      <Nav />
      <Hero />
      <Experience />
      <Awards />
      <Services />
      <Portfolio />
    </div>
  )
}

export default App
