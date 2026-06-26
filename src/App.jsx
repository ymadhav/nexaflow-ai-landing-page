import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import PlatformOverview from './components/PlatformOverview.jsx';
import FeatureExperience from './components/FeatureExperience.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <PlatformOverview />
        <FeatureExperience />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
