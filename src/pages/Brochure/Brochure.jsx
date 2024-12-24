import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { Layout } from "../../components/Layout";
import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";

import "./Brochure.css";

export const Brochure = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/brochures/`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const brochures = data.brochure;

  return (
    <Layout>
      {/* Hero  */}
      <div className="brochurebanner flex flex-col items-cemter justify-center ">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-10 lg:mt-20 flex justify-center items-center">
            <h1 className="font-dmsans font-medium text-white text-3xl lg:text-5xl ">
              Brochure
            </h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-roboto text-3xl lg:text-4xl font-medium py-8 text-center">
          Brochures
        </h1>

        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4">
                {/* <DownloadIcon className="mr-2 w-6 h-6" />
                Download */}
                Coming soon
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Ace Starlit`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery2}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4">
                 {/* <DownloadIcon className="mr-2 w-6 h-6" />
                Download */}
                Coming soon
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Tata Eureka`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery3}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4">
                 {/* <DownloadIcon className="mr-2 w-6 h-6" />
                Download */}
                Coming soon
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Ace Hanei`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px]  w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4">
                  {/* <DownloadIcon className="mr-2 w-6 h-6" />
                Download */}
                Coming soon
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`ATS Pristine`}</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 m-5 mx-6">
            <div className="relative group border flex flex-col items-center hover:shadow-lg rounded-lg">
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={gallery1}
                alt="Gallery Image"
                className="h-[280px] w-full rounded-t-lg object-cover"
              />

              {/* Hover content: Download button */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300 p-4">
                  {/* <DownloadIcon className="mr-2 w-6 h-6" />
                Download */}
                Coming soon
              </button>

              {/* Title */}
              <h4 className="text-center text-xl font-roboto py-3 z-10">{`Prestige`}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
