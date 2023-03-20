import Head from '../app/head';
import { Footer, Navbar } from '../components';
import Loading from '../components/Loading';
import { About, Story, Quotes, GetStarted, Hero, Team, Services, WhatsNew, Events, News, Contact } from '../sections';

const Home = () => (
  <>
    <Head>
      <title>BRIDGR</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <>
      <div className="bg-primary-darkBlue overflow-hidden">
        <div className='bg-image'>
          <Navbar />
          <Hero/>
        </div>
      </div>
      <div className="relative">
        <div className='bg-primary-blue'>
          <About />
        </div>
        <div className='bg-primary-blue-darkBlue-blue'>
          <div className="gradient-03 z-0 overflow-visible lg:block hidden" />
          <Services />
        </div>
      </div>
      <div className="relative">
        <div className='bg-primary-blue'>
          <WhatsNew />
        </div>
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        {/* <GetStarted /> */}
      </div>
        <div className='bg-primary-blue-darkBlue'>
        <Events />
      </div>
      <div className="relative">
        <div className='bg-primary-darkBlue-blue'>
          <Team />
        </div>
        <div className="gradient-04 z-0 overflow-visible lg:block hidden" />
        <div className='bg-primary-blue'>
          <Quotes />
        </div>
        <div className='bg-primary-blue-darkBlue-blue'>
          <News />
        </div>
        <div className='bg-primary-blue'>
          <Story />
        </div>
        <div className='bg-primary-blue'>
          {/* <Contact/> */}
        </div>
      </div>
      <div className='bg-primary-blue'>
        <Footer />
      </div>
    </>
  </>
);

export default Home;
