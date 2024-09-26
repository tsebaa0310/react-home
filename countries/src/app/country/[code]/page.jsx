"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LIST = gql`
  query Continents($code: ID!) {
    country(code: $code) {
      name
      emoji
      languages {
        native
      }
      phone
      subdivisions {
        name
      }
      currency
      capital
    }
  }
`;

const Page = ({ params: { code } }) => {
  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { code: code },
  });

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  const country = data.country;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-indigo-100 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Country Information: {code}
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Name:</strong> {country.name}
          </li>
          <li>
            <strong>Flag:</strong> {country.emoji}
          </li>
          <li>
            <strong>Language:</strong> {country.languages[0].native}
          </li>
          <li>
            <strong>Phone Code:</strong> +{country.phone}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
          <li>
            <strong>Currency:</strong> {country.currency}
          </li>
          <li>
            <strong>Subdivisions:</strong>
            {country.subdivisions.map((e) => e.name).join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
