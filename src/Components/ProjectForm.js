import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { fireStore, storage } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const ProjectForm = () => {
  const [data, setdata] = useState({});

  const getinputvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const abc = { ...data, [name]: value };
    if (name === "Image") {
      abc.Image = e.target.files[0];
    }
    setdata(abc);
    console.log(abc);
  };

  const datasubmit = async (e) => {
    e.preventDefault();
    const { Image, ProjectName, ViewUrl, GitUrl, languages } = data;
    const ImgRef = ref(storage, `uploads/images/${Date.now()}-${Image.name}`);
    const uploadeRes = await uploadBytes(ImgRef, Image);
    return await addDoc(collection(fireStore, "projects"), {
      ProjectName,
      ViewUrl,
      Image: uploadeRes.ref.fullPath,
      GitUrl,
      languages,
    }).then((res) => {
      toast.success("ok");
    });
  };

  return (
    <div className="">
      <div className="m-[300px]">
        <form action="" onSubmit={(e) => datasubmit(e)}>
          <input
            className="w-full my-2"
            type="text"
            onChange={(e) => getinputvalue(e)}
            placeholder="name"
            name="ProjectName"
          />
          <input
            className="w-full my-2"
            type="url"
            placeholder="GitUrl"
            onChange={(e) => getinputvalue(e)}
            name="GitUrl"
          />
          <input
            className="w-full my-2"
            type="text"
            placeholder="ViewUrl"
            onChange={(e) => getinputvalue(e)}
            name="ViewUrl"
          />
          <input
            className="w-full my-2"
            onChange={(e) => getinputvalue(e)}
            type="file"
            placeholder="Image"
            name="Image"
          />
          <input
            className="w-full my-2"
            onChange={(e) => getinputvalue(e)}
            type="text"
            placeholder="languages"
            name="languages"
          />
          <button type="submit" className="bg-white">
            click
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectForm;
