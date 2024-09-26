"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_DATA = gql`
  query Continents($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      emoji
      name
    }
  }
`;

const Page = ({ params: { code } }) => {
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: {
      filter: {
        continent: {
          eq: code,
        },
      },
    },
  });

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-indigo-100 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Code: {code}</h2>
      <ul className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {data?.countries.map((item) => (
          <Link
            key={item.code}
            href={`/country/${item.code}`}
            className="block mb-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex justify-between items-center shadow-md"
          >
            <li className="flex items-center justify-between w-full">
              <span className="text-lg font-medium text-gray-700">
                {item.name} {item.emoji}
              </span>
              <span className="text-sm text-gray-500">{item.code}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
