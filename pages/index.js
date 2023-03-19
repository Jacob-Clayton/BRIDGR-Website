import { Footer, Navbar } from '../components';
import Loading from '../components/Loading';
import { About, Story, Quotes, GetStarted, Hero, Team, Services, WhatsNew, Events, News, Contact } from '../sections';

const Home = () => (
    <>
      <div className="bg-primary-darkBlue overflow-hidden">
        <div className='bg-image'>
          <Navbar />
          <Hero/>
        </div>
      </div>
      <div className="relative">
        <div className='bg-primary-darkBlue-blue'>
          <About />
        </div>
        <div className='bg-primary-blue-darkBlue'>
          <div className="gradient-03 z-0 overflow-visible lg:block hidden" />
          <Services />
        </div>
      </div>
      <div className="relative">
        <div className='bg-primary-darkBlue'>
          <WhatsNew />
        </div>
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        {/* <GetStarted /> */}
      </div>
        <div className='bg-primary-darkBlue-blue-darkBlue'>
        <Events />
      </div>
      <div className="relative">
        <div className='bg-primary-darkBlue'>
          <Team />
        </div>
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        <div className='bg-primary-darkBlue'>
          <Quotes />
        </div>
        <div className='bg-primary-darkBlue-blue'>
          <News />
        </div>
        <div className='bg-primary-blue-darkBlue'>
          <Story />
        </div>
        <div className='bg-primary-blue'>
          <Contact/>
        </div>
      </div>
      <div className='bg-primary-darkBlue'>
        <Footer />
      </div>
    </>
);

export default Home;
