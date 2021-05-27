import { FormEvent, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [image, setImage] = useState("");
  const [saveData, setSaveData] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setError('');
      const data = await axios.post("/api/image", {
        data: saveData,
        name,
      });
      
      setImage(data.data);
    } catch (e) {
      setError('Something went wrong. Is the save file correct?');
    }
  }

  return (
    <Layout>
      <h1 className="mx-auto my-4 text-2xl font-bold text-center text-white">
        Melvor Idle Card Generator
      </h1>
      <p className="text-[#bdbdbd] py-4 italic"><span className="font-bold">To find your save data</span> <div>Go to Settings &rarr; Account Settings &rarr; Import / Export Save &rarr; Export Save &rarr; Copy and paste the data in the field below.</div></p>
      <form onSubmit={onSubmit} className="flex flex-col space-y-2">
        <textarea
          className="bg-[#272727] text-[#eee] w-full p-4"
          name="data"
          placeholder="Enter save data here..."
          id=""
          onChange={(e) => setSaveData(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        {error && <div className="px-4 py-2 font-semibold text-red-700 bg-red-300 border border-red-700 rounded">{error}</div>}
        <input
          className="bg-[#272727] text-white w-full p-4"
          type="text"
          placeholder="Enter character name (optional)"
          maxLength={32}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <button
          type="submit"
          className="bg-[#1f1f1f] hover:bg-[#1b1b1b] rounded px-4 py-2 text-white font-semibold block hover:shadow w-full"
        >
          Generate Melvor Idle Card
        </button>
      </form>
      <img src={image} alt="" className="mx-auto mt-4" />
      {image && <a
          href={image}
          download={`${name}sMelvorIdleCard.png`}
          className="block w-full px-4 py-2 mx-auto mt-4 font-semibold text-center text-white bg-blue-600 rounded hover:shadow md:w-4/5"
        >
          Download
        </a>}
    </Layout>
  );
};

export default IndexPage;
