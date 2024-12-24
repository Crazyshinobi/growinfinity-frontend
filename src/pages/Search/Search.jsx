import React from "react";
import { Layout } from "../../components/Layout";
import "./Search.css";
import { PropertyCard } from "../../components/PropertyCard";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export const Search = () => {
  const { id } = useParams();
  const apiUrl = `${process.env.BASE_URL}/api/v1/property/search?query=${id}`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;

  return (
    <Layout>
      {/* Search Hero  */}
      <div className="searchbanner flex items-center justify-center">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-10 lg:mt-20 flex justify-center items-center">
            <h1 className="font-dmsans text-3xl lg:text-4xl font-medium text-white">
              Search Properties
            </h1>
          </div>
        </div>
      </div>

      <div className="flex my-8 justify-center">
        <h3 className="text-3xl">
          Search results for <span className="font-bold capitalize">{id}</span>{" "}
        </h3>
      </div>

      <div className="grid sm:grid-cols-12 mx-16">
        {properties &&
          properties.map((property) => {
            return (
              <div className="col-span-3 flex justify-center m-3">
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  name={property.name}
                  image={property.image[0]}
                  location={property.location}
                  builder={property.builder}
                  unit={property.unit}
                  size={property.size}
                  price={property.price}
                />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
