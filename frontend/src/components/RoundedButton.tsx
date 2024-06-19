function RoundedButton() {
  return (
    <div className="transform transition-transform duration-100 hover:scale-110">
      <button className="bg-blue-500 hover:bg-blue-700 hover:outline-white hover:outline text-white text-xl font-bold py-4 px-4 rounded-full w-32 h-32 flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        K
      </button>
      <p className="mt-2 text-center text-blue-300">Kristóf</p>
    </div>
  );
}

export default RoundedButton;
