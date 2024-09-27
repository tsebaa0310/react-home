"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const GET_DATA = gql`
  query Components($last: Int) {
    allFilms(last: $last) {
      films {
        title
        id
        edited
        episodeID
        director
        created
        producers
        releaseDate
      }
    }
  }
`;

const Components = ({ last }) => {
  const { data, error, loading } = useQuery(GET_DATA, {
    variables: { last },
  });

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-wrap">
      {data.allFilms.films.map((item) => (
        <Link
          key={item.id}
          href={`/detail/${item.id}`}
          className="flex justify-between items-center mx-5"
        >
          <div>
            <Image
              src={`/${item.title}.png`}
              alt={`${item.title}`}
              width={300}
              height={100}
            />
            <p>Title: {item.title}</p>
            <p>Director: {item.director}</p>
            <p>Release Date: {item.releaseDate}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Components;
