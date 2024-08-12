"use client";
import { useState } from "react";
import getDataFromGemini from "../../pages/api/geminiBackend";
import axios from "axios";

export const PromptBox = () => {
  const [result, setResult] = useState("Isi datanya dulu boss! ");
  const [gender, setGender] = useState("");

  const [classMale, setClassMale] = useState("bg-transparent");
  const [classFemale, setClassFemale] = useState("bg-transparent");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    height: "",
  });

  const handleMaleClick = () => {
    setGender("Laki-Laki");
    console.log(gender);
    setClassMale("bg-[#3730A3] hover:scale-105");
    setClassFemale("bg-transparent");
  };

  const handleFemaleClick = () => {
    setGender("Perempuan");
    setClassMale("bg-transparent");
    setClassFemale("bg-[#3730A3] hover:scale-105");
    console.log(gender);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const response = await axios.post("/api/geminiBackend", {
        name: formData.name,
        weight: formData.weight,
        height: formData.height,
        gender: gender,
      })
      console.log(response)
      setIsLoading(false)
      setResult(response.data.text)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full lg:w-[90%] xlg:w-[65%] min-h-[50vh] text-white mt-10 p-5 prompt-border rounded-xl flex flex-col lg:flex-row justify-between md:justify-between">
        <div className="container flex flex-col mb-5 lg:w-4/12 lg:mb-0 lg:me-5">
          <div className="border-b-2 border-slate-800 pb-3 mb-2">
            <p>Nama</p>
            <input className="input bg-[#1E293B] px-2 py-3 rounded-lg border-slate-600 border-[1px] w-full mt-1" type="text" placeholder="Masukkan Nama" value={formData.name} onChange={handleChange} name="name" />
          </div>

          <div className="border-b-2 border-slate-800 pb-3 mb-2">
            <p>Berat Badan</p>
            <input className="input bg-[#1E293B] px-2 py-3 rounded-lg border-slate-600 border-[1px] w-full mt-1" type="text" placeholder="Masukkan Berat Badan" value={formData.weight} onChange={handleChange} name="weight" />
          </div>
          <div className="border-b-2 border-slate-800 pb-3 mb-2">
            <p>Tinggi Badan</p>
            <input className="input bg-[#1E293B] px-2 py-3 rounded-lg border-slate-600 border-[1px] w-full mt-1" type="text" placeholder="Masukkan Tinggi Badan" name="height" value={formData.height} onChange={handleChange} />
          </div>
          <div className="border-b-2 border-slate-800 pb-3 mb-2">
            <p>Jenis Kelamin</p>
            <div className="flex rounded-xl border-slate-700 mt-1  ">
              <div className={` ${classMale} hover:cursor-pointer ease-in duration-300 text-center rounded-lg w-1/2 px-10 py-2`} onClick={handleMaleClick}>
                Laki-Laki
              </div>
              <div className={` ${classFemale} hover:cursor-pointer ease-in duration-300 text-center rounded-lg w-1/2 px-10 py-2`} onClick={handleFemaleClick}>
                Perempuan
              </div>
            </div>
          </div>
          <div className="border-b-2 border-slate-800 pb-3 mb-2">
            <button className={` bg-[#3730A3] hover:scale-105 hover:rotate-6 hover:cursor-pointer ease-in duration-300 text-center rounded-lg w-full px-10 py-2`} onClick={handleSubmit}>
              {(isLoading) ? "Loading..." : "Gass!"}
            </button>
          </div>
        </div>
        {/* <div className="container flex justify-center items-center "> */}
        <div className="h-full w-full lg:w-8/12 border-slate-500 border-[2px] rounded-xl bg-[#1E293B] p-3 text-slate-300">{result}</div>
        {/* </div> */}
      </div>
    </>
  );
};
