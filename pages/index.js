import { Footer, Navbar } from '../components';
import { About, Story, Hero, Team, Services, Pricing, Events, News, Contact } from '../sections';

const Home = () => (
  <>
    <div className="bg-cetecean-blue overflow-hidden">
      <Navbar />
      <Hero/>
    </div>
    <div className="relative">
      <div className='bg-cetecean-blue'>
        <About />
      </div>
      <div className='bg-cetecean-blue'>
        <Team />
        <Story />
      </div>
      <div className='bg-cetecean-blue'>
        <Services />
        <Pricing />
      </div>
      <div className='bg-cetecean-blue'>
        <Events />
        <News /> 
      </div>
      <div className='bg-cetecean-blue'>
        <Contact/>
      </div>
      <div className='bg-cetecean-blue'>
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
