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

  if (loading) return "Loading";
  if (error) return " Error";

  return (
    <div>
      <h2>Code: {code}</h2>
      {data?.countries.map((item) => (
        <Link key={item.code} className="flex" href={`/country/${item.code}`}>
          <li>
            {item.name} {item.emoji} {item.code}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Page;
