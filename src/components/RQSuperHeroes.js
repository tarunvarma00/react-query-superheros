import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeroes = () => {
  const getRQsuperHeroesData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    getRQsuperHeroesData,
    { cacheTime: 10000 }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
