import { Footer, Navbar } from '../components';
import { About, Story, Quotes, Hero, Team, Services, Pricing, Events, News, Contact } from '../sections';

const Home = () => (
  <>
    <div className="bg-image bg-primary-lightBlue overflow-hidden">
      <Navbar />
      <Hero/>
    </div>
    <div className="relative">
      <div className='bg-primary-lightBlue'>
        <About />
      </div>
      <div className='bg-primary-darkBlue'>
        <Team />
        {/* <Story /> */}
        <Quotes />
      </div>
      <div className='bg-primary-lightBlue'>
        <Services />
        <Pricing />
      </div>
      <div className='bg-primary-darkBlue'>
        <Events />
        <News /> 
      </div>
      <div className='bg-primary-darkBlue'>
        <Contact/>
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
