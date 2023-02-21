import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, Services, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-darkBlue overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0 md:block hidden" />
      <Services />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0 md:block hidden" />
      <GetStarted />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0 md:block hidden" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
