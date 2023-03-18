import { Footer, Navbar } from '../components';
import Loading from '../components/Loading';
import { About, Story, Quotes, GetStarted, Hero, Team, Services, WhatsNew, Events, News, Contact } from '../sections';

const Home = () => (
    <div className="bg-primary-darkBlue overflow-hidden">
      <div className='bg-image'>
        <Navbar />
        <Hero/>
      </div>
      <div className="relative">
        <About />
        <div className="gradient-03 z-0 overflow-visible lg:block hidden" />
        <Services />
      </div>
      <div className="relative">
        <WhatsNew />
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        {/* <GetStarted /> */}
      </div>
      <Events />
      <div className="relative">
        <Team />
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        <Quotes />
        <News />
        <Story />
        {/* <Contact/> */}
      </div>
      <Footer />
    </div>
);

export default Home;
