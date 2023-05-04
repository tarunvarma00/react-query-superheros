import axios from "axios";
import React, { useState, useEffect } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getSuperHeroesData();
  }, []);

  const getSuperHeroesData = async () => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  console.log("data:", data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      <h2> SuperHeroes Page</h2>

      {data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroes;
