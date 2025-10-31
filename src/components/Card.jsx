import { FiCheckCircle } from "react-icons/fi";

function Card({ data }) {
  return (
    <div className="h-full col-span-3 lg:col-span-1 mx-5 lg:mx-0 border rounded-md border-gray-300 bg-white text-black">
      <div className="border-b border-gray-300 bg-gray-100 rounded-t-md h-10 flex items-center justify-center">
        <FiCheckCircle className="text-3xl text-green-400" />
        <p className="text-lg pl-2">{data.name}</p>
      </div>
      <p className="text-center px-10 pt-3">{data.text}</p>
    </div>
  );
}

export default Card;
