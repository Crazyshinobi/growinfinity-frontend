import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Layout } from "../../components/Layout";
import { NavigationBar } from "../../components/NavigationBar";

import award1 from "../../assets/img/1.jpg";
import award2 from "../../assets/img/4.jpg";
import award3 from "../../assets/img/Award.jpg";
import award4 from "../../assets/img/Experion Award.jpg";
import award5 from "../../assets/img/Experion Elements.jpg";

import "./Awards.css";

export const Awards = () => {
  return (
    <>
      <ToastContainer />
      <Layout>
        <div className="awardsbanner flex items-center justify-center">
          <div className="grid sm:grid-cols-12">
            <div className="col-span-12 text-center lg:mt-20 flex justify-center items-center">
              <h1 className="font-dmsans text-3xl lg:text-4xl font-medium text-white">
                Awards
              </h1>
            </div>
          </div>
        </div>

        <NavigationBar />

        <div className="my-10">
          <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-center py-3 lg:py-8">
            Awards
          </h1>

          <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
              <img src={award1} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
              <img src={award2} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
              <img src={award3} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
              <img src={award4} alt="" />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
              <img src={award5} alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
