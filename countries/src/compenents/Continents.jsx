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
  const { data, error, loading } = useQuery(GET_CONTINENTS, {
    variables: {
      filter: {
        continent: {
          eq: "EU",
        },
      },
    },
  });
  if (loading) return "Loading";
  if (error) return " Error";

  return (
    <div>
      {data?.continents.map((continent) => (
        <Link key={continent.id} href={`/continents/${continent.code}`}>
          <li>
            {continent.name} - {continent.code}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Continents;
