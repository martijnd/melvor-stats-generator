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
    <Layout title="Home | Next.js + TypeScript Example">
      <form action="" onSubmit={onSubmit}>
        <textarea
          name="data"
          id=""
          onChange={(e) => setSaveData(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <img src={image} alt="" />
    </Layout>
  );
};

export default IndexPage;
