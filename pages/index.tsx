import { FormEvent, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [image, setImage] = useState("");
  const [saveData, setSaveData] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const data = await axios.post("/api/image", {
      data: saveData,
    });

    setImage(data.data);
  }

  return (
    <Layout>
      <h1 className="text-white font-bold mx-auto my-4 text-2xl text-center">Melvor Idle Statistics card generator</h1>
      <form onSubmit={onSubmit}>
        <textarea
        className="bg-[#272727] text-white w-full p-4"
          name="data"
          placeholder="Enter save here..."
          id=""
          onChange={(e) => setSaveData(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit" className="bg-[#272727] rounded px-4 py-2 text-white font-semibold block hover:shadow w-full">Submit</button>
      </form>
      <img src={image} alt="" className="mx-auto mt-4" />
    </Layout>
  );
};

export default IndexPage;
