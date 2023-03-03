import About from "./components/container/About"
import Contact from "./components/container/Contact"
import Courses from "./components/container/Course/Courses"
import Footer from "./components/container/Footer"
import Home from "./components/container/Home"
import Teacher from "./components/container/Teacher"
import Navbar from "./components/Navbar/Navbar"

function App() {
  

  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
