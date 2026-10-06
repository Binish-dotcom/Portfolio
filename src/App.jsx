import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudyLeadGen from './components/CaseStudyLeadGen'
import CaseStudyFacebook from './components/CaseStudyFacebook'
import CaseStudyLinkedIn from './components/CaseStudyLinkedIn'
import CaseStudyGoogleMaps from './components/CaseStudyGoogleMaps'
import CaseStudyQualification from './components/CaseStudyQualification'
import CaseStudyColdCalling from './components/CaseStudyColdCalling'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudyLeadGen />
        <CaseStudyFacebook />
        <CaseStudyLinkedIn />
        <CaseStudyGoogleMaps />
        <CaseStudyQualification />
        <CaseStudyColdCalling />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
