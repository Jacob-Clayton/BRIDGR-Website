import { Footer, Navbar } from '../components';
import { About, Story, Hero, Team, Services, Pricing, Events, News, Contact } from '../sections';

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
        <Story />
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
      </div>
      <div className='bg-primary-lightBlue'>
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
