import { Footer, Navbar } from '../components';
import { About, Explore, Story, Feedback, GetStarted, Hero, Team, Services, WhatsNew, Events } from '../sections';

const Home = () => (
  <div className="bg-primary-darkBlue overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0 md:block hidden" />
      <Services />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0 md:block hidden" />
      <GetStarted />
    </div>
    <Events />
    <div className="relative">
      <Team />
      <div className="gradient-04 z-0 md:block hidden" />
      <Feedback />
    </div>
    <Story />
    <Footer />
  </div>
);

export default Home;
