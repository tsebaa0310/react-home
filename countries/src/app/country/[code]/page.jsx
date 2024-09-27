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

  if (loading) return "Loading";
  if (error) return "Error";

  const country = data.country;

  return (
    <div>
      <h2>Code: {code}</h2>
      <ul>
        <li>Name: {country.name}</li>
        <li>flag: {country.emoji}</li>
        <li>languages: {country.languages[0].native}</li>
        <li>Phone: {country.phone}</li>
        <li>Capital: {country.capital}</li>
        <li>Currency: {country.currency}</li>

        <li>
          Subdivisions: {country.subdivisions.map((e) => e.name).join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default Page;
