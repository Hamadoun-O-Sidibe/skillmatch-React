import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PourQui from './components/PourQui'
import CommentCaMarche from './components/CommentCaMarche'
import Fonctionnalites from './components/Fonctionnalites'
import PasserelleAfrique from './components/PasserelleAfrique'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'


function App() {
  return (
  <>
  < Navbar />
  <main>
    <Hero/>
    <PourQui/>
    <CommentCaMarche/>
    <Fonctionnalites/>
    <PasserelleAfrique/>
    <FAQ />
    <CTA/>
    <Footer/>
  </main>
  </>
  )
}

export default App
