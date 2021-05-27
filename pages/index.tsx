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
      <h1 className="text-white font-bold mx-auto my-4 text-2xl text-center">
        Melvor Idle Card Generator
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col space-y-2">
        <textarea
          className="bg-[#272727] text-[#eee] w-full p-4"
          name="data"
          placeholder="Enter save here..."
          id=""
          onChange={(e) => setSaveData(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        {error && <div className="text-red-700 font-semibold border bg-red-300 border-red-700 rounded px-4 py-2">{error}</div>}
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
          className="bg-[#272727] rounded px-4 py-2 text-white font-semibold block hover:shadow w-full"
        >
          Generate Melvor Idle Card
        </button>
      </form>
      <img src={image} alt="" className="mx-auto mt-4" />
      {image && <a
          href={image}
          download={`${name}sMelvorIdleCard.png`}
          className="bg-blue-600 mt-4 rounded px-4 py-2 text-white font-semibold block hover:shadow w-full md:w-4/5 mx-auto text-center"
        >
          Download
        </a>}
    </Layout>
  );
};

export default IndexPage;
