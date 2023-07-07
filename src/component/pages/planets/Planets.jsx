import { useEffect, useState } from "react";

const Planets = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataPlanets = async () => {
      try {
        const resp = await fetch("https://swapi.dev/api/planets/1");
        const planetsResp = await resp.json();
        setData(planetsResp);
      } catch (error) {
        alert("Gagal");
      }
    };

    dataPlanets();
  }, []);
  return (
    <div>
      <h1>Films</h1>
      {data?.map((post) => (
        <div>
          <p>{post.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Planets;
