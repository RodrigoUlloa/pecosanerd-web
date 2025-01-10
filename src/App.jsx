import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import './App.css'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />
      <Hero />
      <ContactForm />
    </main>
  )
}

export default App
