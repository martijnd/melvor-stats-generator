import { FormEvent, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [image, setImage] = useState("");
  const [saveData, setSaveData] = useState("");
  const [name, setName] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const data = await axios.post("/api/image", {
      data: saveData,
      name,
    });

    setImage(data.data);
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
        <input
          className="bg-[#272727] text-white w-full p-4"
          type="text"
          placeholder="Enter character name (optional)"
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
          Download Melvor Idle Card
        </a>}
    </Layout>
  );
};

export default IndexPage;
