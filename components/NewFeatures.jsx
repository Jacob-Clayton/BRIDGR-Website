import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex-1 flex flex-col xl:max-w-[280px] lg:max-w-[270px] md:max-w-[280px] sm:max-w-[250px] max-w-[240px] min-w-[220px]'>
    <div className=" flex-2 flex md:flex-col flex-row xl:max-w-[280px] lg:max-w-[270px] md:max-w-[280px] sm:max-w-[250px] max-w-[240px] max-w-[220px]">
      <div
        className={`${styles.flexCenter} sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] rounded-[24px] bg-primary-black bg-opacity-70`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] font-bold text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white">
        {title}
      </h1>
    </div>

    <div>
      <p className=" flex-1 max-w-[400px] md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
        {subtitle}
      </p>
    </div>
  </div>
);

export default NewFeatures;
