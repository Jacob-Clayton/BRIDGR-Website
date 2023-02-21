import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row sm:w-[500px] w-[330px]`}>
    <div
      className={`${styles.flexCenter} sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[35px] bg-black bg-opacity-40`}
    >
      <p className="font-bold sm:text[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[12px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[20px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
