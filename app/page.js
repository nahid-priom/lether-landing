import ProductGrid from './components/Product'
import HeroSection from './components/Hero'
import PerformanceInsights from './components/Performance'
import WhyChoose from './components/WhyChoose'
import How from './components/How'
import Testimonial from './components/Testmonials'
import CTA from './components/Cta'
import Header from './components/Header'

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <ProductGrid/>
      <PerformanceInsights/>
      <WhyChoose/>
      <How/>
      <Testimonial/>
      <CTA/>
     
    </main>
  )
}