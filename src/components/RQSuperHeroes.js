import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const getRQsuperHeroesData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const addSuperHero = (hero) => {
    return axios.post("http://localhost:4000/superheroes", hero);
  };

  const deleteSuperHero = async (id) => {
    const response = axios.delete(`http://localhost:4000/superheroes/${id}`);
    console.log("response: " + response);
  };

  const { mutate: addHero } = useMutation(addSuperHero);
  const { mutate: deleteHero } = useMutation(deleteSuperHero);
  const handleSubmit = () => {
    const hero = {
      name,
      alterEgo,
    };
    addHero(hero);
  };

  const handleDelete = (id) => {
    deleteHero(id);
  };

  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    getRQsuperHeroesData
    // { cacheTime: 10000 }
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

      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="alterEgo"
          value={alterEgo}
          placeholder="AlterEgo"
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleSubmit}>Post</button>
      </div>

      {data?.data.map((hero) => {
        return (
          <div key={hero.name}>
            {hero.name}
            <button onClick={() => handleDelete(hero.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperHeroes;
