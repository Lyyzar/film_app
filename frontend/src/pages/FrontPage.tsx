import NavBar from "../components/NavBar";

function FrontPage() {
  return (
    <>
      <NavBar />
      {/* <div className="bg-orange-100 min-h-screen flex items-center justify-center">
        <div className="p-4 m-4 flex items-center justify-center h-full w-full">
          <div className="p-6 bg-orange-200 rounded-lg shadow-xl w-full h-full">
            <div className="flex mb-5 items-center">asd</div>
          </div>
        </div>
      </div> */}
      {/* <div className="hover:bg-red-200 shadow-xl rounded-md m-10 w-80 h-80">
        <div className="font-semibold text-xl p-4 bg-red-600">
          <div className="text-white">
            <div className="flex">
              <div>Film name</div>
              <div className="ml-2">Rating: 4/5⭐</div>
            </div>

            <div>Year: 2003</div>
          </div>
        </div>

        <div className="p-4 bg-red-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
          optio inventore possimus itaque, veritatis velit mollitia
          exercitationem iure ipsam distinctio eius quisquam totam enim modi.
          Fugit veniam corrupti cupiditate!
        </div>
      </div> */}

      <div className="group shadow-xl bg-red-300 rounded-md m-10 w-fit h-fit">
        <div
          id="felső"
          className="group-hover:opacity-10 bg-red-600 text-xl text-white font-semibold rounded-t-md"
        >
          <div id="name, rating" className="flex p-4">
            <div>Film name</div>
            <div className="flex justify-end">
              <div className="ml-2">Rating: 4/5⭐</div>
            </div>
          </div>
          <div id="year" className="pl-4 pb-4">
            <div>Year: 2003</div>
          </div>
        </div>
        <div className="flex">
          <div id="picture" className="group-hover:opacity-10 w-1/2">
            <img
              className="w-40 h-50"
              src="https://m.media-amazon.com/images/I/81CLFQwU-WL.jpg"
              alt="film image"
            />
          </div>
          <div id="alsó" className="group-hover:opacity-10 w-1/2">
            <div className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
              optio inventore possimus itaque, veritatis velit mollitia
              exercitationem iure ipsam distinctio eius quisquam totam enim
              modi. Fugit veniam corrupti cupiditate!
            </div>
          </div>
        </div>
        <button className="hidden group-hover:flex absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">
          Click Me
        </button>
      </div>
    </>
  );
}

export default FrontPage;
