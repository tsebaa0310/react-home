"use client";

import React from "react";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      title
      releaseDate
      producers
      id
      episodeID
      edited
      director
      created
    }
  }
`;

const Page = ({ params: { filmId } }) => {
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { filmId: filmId },
  });

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center">Error: {error.message}</div>;

  return (
    <div className="p-4 items-center justify-center">
      <Image
        src={`/${data.film.title}.png`}
        alt={`${data.film.title}`}
        width={300}
        height={100}
      />
      <h3 className="text-2xl font-bold">Title: {data.film.title}</h3>
      <p className="mt-2">Directed by: {data.film.director}</p>
      <p className="mt-2">Producers by: {data.film.producers}</p>
      <p>episodeID: {data.film.episodeID}</p>
      <p>Release Date: {data.film.releaseDate}</p>
    </div>
  );
};

export default Page;
