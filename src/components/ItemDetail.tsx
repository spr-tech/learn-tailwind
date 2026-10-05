import { useParams, Link } from "react-router-dom";
import { pageData } from "../data/AppData";

const ItemDetail = () => {
  const { id } = useParams();
  const item = pageData.find((data) => data.id === Number(id));

  if (!item) {
    return (
      <div className="p-8 text-white">
        <p>Item not found.</p>
        <Link to="/" className="underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 text-white flex justify-center mx-auto">
      <div className="p-8 text-white">
        <Link to="/" className="underline">
          ← Back
        </Link>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <img
            src={item.image}
            alt={item.name}
            className="flex-1 w-fit h-70 md:h-80 object-cover  mb-4 rounded-md"
          />

          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            {item.sponsored && (
              <span className="inline-block bg-slate-600 px-3 py-1 rounded-full text-sm mt-2">
                sponsored
              </span>
            )}
            {item.about && <p className="text-slate-400 mt-4 ">{item.about}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
