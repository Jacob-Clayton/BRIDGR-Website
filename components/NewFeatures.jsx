import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 max-w-[400px] mt-[16px] font-normal lg:text:-[26px] md:text-[22px] sm:text-[18px] text-[16px] text-[#B0B0B0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
