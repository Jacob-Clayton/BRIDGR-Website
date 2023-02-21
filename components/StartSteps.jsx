import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row sm:w-[500px] w-[330px]`}>
    <div
      className={`${styles.flexCenter} sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] rounded-[35px] bg-black bg-opacity-40`}
    >
      <p className="font-bold sm:text[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] text-[16px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[20px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
