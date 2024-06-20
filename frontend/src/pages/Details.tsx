import Layout from "../components/Layout";
import RoundedButton from "../components/RoundedButton";
import { CardProps } from "../interfaces";

const Details: React.FC<CardProps> = ({
  film_name,
  runtime,
  year,
  rating,
  description,
  poster,
}) => {
  return (
    <>
      <Layout>
        <div id="main" className="bg-cardColor m-10 p-5 rounded">
          <div className="flex">
            <div id="image" className="w-96">
              <img className="rounded" src={poster} alt="film poster" />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <div id="film_name-year" className="flex justify-between m-4">
                  <div>
                    <div className="font-semibold text-2xl">{film_name}</div>
                    <div className="text-xl">{year}</div>
                  </div>
                  <div className="text-xl">{rating}⭐</div>
                </div>
                <div id="description" className="m-4 text-xl">
                  <div className="w-full h-auto">{description}</div>
                </div>
              </div>
              <div id="runtime" className="m-4 flex justify-between text-xl">
                <div>Runtime: {runtime}</div>
                <div>
                  <RoundedButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
