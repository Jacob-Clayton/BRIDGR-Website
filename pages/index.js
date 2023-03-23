import { Footer, Navbar } from '../components';
import { About, Story, Quotes, GetStarted, Hero, Team, Services, WhatsNew, Events, News, Contact } from '../sections';

const Home = () => (
  <>
    <div className="bg-primary-skyBlue overflow-hidden">
      <div className='bg-image'>
        <Navbar />
        <Hero/>
      </div>
    </div>
    <div className="relative">
      <div className='bg-primary-lightBlue'>
        <About />
      </div>
      <div className='bg-primary-lightBlue-blue'>
        <div className="gradient-03 z-0 overflow-visible lg:block hidden" />
        <Story />
      </div>
    </div>
    <div className="relative">
      <div className='bg-primary-blue'>
        <Services />
        {/* <WhatsNew /> */}
      </div>
      {/* <div className="gradient-04 z-0 overflow-visible lg:block hidden" /> */}
      {/* <GetStarted /> */}
    </div>
      <div className='bg-primary-blue'>
      <Events />
    </div>
    <div className="relative">
      <div className='bg-primary-blue-lightBlue'>
        <Team />
      </div>
      <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
      <div className='bg-primary-lightBlue'>
        <Quotes />
      </div>
      <div className='bg-primary-lightBlue-blue'>
        <News />
      </div>
      <div className='bg-primary-blue-lightBlue'>
        
      </div>
      <div className='bg-primary-blue'>
        {/* <Contact/> */}
      </div>
    </div>
    <div className='bg-primary-blue'>
      <Footer />
    </div>
  </>
);

export default Home;
