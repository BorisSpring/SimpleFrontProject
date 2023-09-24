import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex flex-col  sm:max-w-[250px] min-w-[210px]'>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} className='w-1/2 h-1/2' />
    </div>
    <h2 className='text-white text-[24px] font-semibold my-5 leading-8'>
      {title}{' '}
    </h2>
    <p className='text-[#B0B0B0] text-[16px]'>{subtitle}</p>
  </div>
);

export default NewFeatures;
