"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

const Continents = () => {
  const { data, error, loading } = useQuery(GET_CONTINENTS);

  if (loading)
    return <div className="text-center text-gray-600 text-lg">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 text-lg">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-indigo-100 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Continents
      </h1>
      <ul className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {data?.continents.map((continent) => (
          <Link
            key={continent.code}
            href={`/continents/${continent.code}`}
            className="block mb-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex justify-between items-center shadow-md"
            aria-label={`View details about ${continent.name}`}
          >
            <li className="flex items-center justify-between w-full">
              <span className="text-lg font-medium text-gray-700">
                {continent.name}
              </span>
              <span className="text-sm text-gray-500">{continent.code}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
