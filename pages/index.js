import { Footer, Navbar } from '../components';
import { About, Story, Quotes, Hero, Team, Services, Events, News, Contact } from '../sections';

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
      <div className='bg-primary-darkBlue'>
        {/* <div className="gradient-03 z-0 overflow-visible lg:block hidden" /> */}
        <Story />
      </div>
    </div>
    <div className="relative">
      <div className='bg-primary-darkBlue'>
        <Team />
      </div>
      <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
      <div className='bg-primary-darkBlue'>
        <Quotes />
      </div>
      <div className='bg-primary-lightBlue'>
        <Services />
      </div>
      <div className='bg-primary-lightBlue'>
        <Events />
      </div>
      <div className='bg-primary-lightBlue'>
        <News /> 
      </div>
      <div className='bg-primary-blue'>
        {/* <Contact/> */}
      </div>
    </div>
    <div className='bg-primary-lightBlue'>
      <Footer />
    </div>
  </>
);

export default Home;
