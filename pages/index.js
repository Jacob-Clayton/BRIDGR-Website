import { Footer, Nav } from '../components';
import { Hero, About, Team, Story, Services, Pricing, Events, News, Contact } from '../sections';

const Home = () => (
  <>
    <div className="bg-cetecean-blue overflow-hidden">
      <Nav />
      <Hero/>
    </div>
    <div className="relative">
      <div className='bg-cetecean-blue'>
        <About />
        <Team />
        <Story />
        <Services />
        <Pricing />
        <Events />
        <News /> 
        <Contact/>
      </div>
      <div className='bg-primary-black'>
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
