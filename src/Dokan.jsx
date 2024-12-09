import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "./App";
export default function Dokan() {
  const [dokan, setDokan] = useState([]);
  const temp = [];
  useEffect(() => {
    const getDokan = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/dokan`);
        res.data.data.map((x) => {
          if (!temp.includes(x)) {
            temp.push(x);
          }
        });
        setDokan(temp);
      } catch (err) {
        console.log(err);
      }
    };
    getDokan();
  }, []);

  console.log(dokan);

  return (
    <div className="mt-4 flex flex-row flex-wrap gap-4 border-2 border-white w-1/2 mx-auto">
      {dokan.map((dokan) => (
        <div className="mt-2 ml-2 mb-2 px-4 py-2 bg-white">{dokan.name}</div>
      ))}
    </div>
  );
}
