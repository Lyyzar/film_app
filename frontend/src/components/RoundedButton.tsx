const RoundedButton = () => {
  return (
    <div className="transform transition-transform duration-100 hover:scale-105">
      <button className="bg-white hover:bg-white hover:outline-black hover:outline text-white text-xl text-orange-600 font-bold py-4 px-4 rounded-full w-12 h-12 flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        +
      </button>
    </div>
  );
};

export default RoundedButton;
