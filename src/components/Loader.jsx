import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height={80}
      width={80}
      color="#3a89f0"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="threeDots-loading"
      secondaryColor="#f1806b"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
