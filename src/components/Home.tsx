import { pageData } from "../data/AppData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" p-5 bg-black text-white h-full">
      {/* content  */}
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5  ">
          {" "}
          {pageData.map((data) => {
            return (
              <Link
                to={`/item/${data.id}`}
                key={data.id}
                className=" p-2 border border-slate-800 rounded-lg hover:-translate-y-2 duration-150 ease-in cursor-pointer"
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-45 md:h-80 object-cover  mb-4 rounded-md"
                />

                {/* image name */}
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span>{data.name}</span>

                    {data.sponsored && (
                      <span className="bg-slate-600 p-2 rounded-full">
                        sponsored
                      </span>
                    )}
                  </div>

                  <ArrowUpRight />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
