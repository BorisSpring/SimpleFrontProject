import styles from '../styles';

const StartSteps = ({ feature, number }) => (
  <div className='flex items-center gap-8'>
    <div className='flex items-center justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] text-white'>
      <p
        className={`${styles.flexCenter} w-[70px] h-[70px] text-[20px] font-bold `}
      >
        0{number}
      </p>
    </div>
    <div className='text-[#B0B0B0]'> {feature}</div>
  </div>
);

export default StartSteps;
