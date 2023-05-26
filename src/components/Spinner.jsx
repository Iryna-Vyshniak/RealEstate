import spinner from '../assets/spinner.svg';

export const Spinner = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="">
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};
