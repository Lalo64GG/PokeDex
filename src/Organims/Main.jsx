import { useEffect, useState } from "react";
import Card from "../Molecules/Card";
import { GetRandomPokemon } from "../Data/GetPokemon";
import Button from "../Atoms/Button";

const Loader = () => (
  <div className="flex items-center justify-center h-96 ">
    <div className="w-16 h-16 border-t-2 border-b-2 border-green-500 rounded-full animate-spin"></div>
  </div>
);

const Main = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para controlar el loader

  useEffect(() => {
    const consumoAPI = async () => {
      setIsLoading(true); // Mostrar el loader al comenzar la solicitud
      try {
        const api = await GetRandomPokemon();
        setData(api);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setIsLoading(false); // Ocultar el loader cuando se complete la solicitud
      }
    };

    consumoAPI();
  }, []);

  return (
    <div>
      {isLoading ? ( // Mostrar el loader si isLoading es true
        <Loader />
      ) : (
        <Card 
          data={data}
          specialColorIndex={ 3 } 
        />
      )}

      <div className="flex items-center justify-center mb-10">
        <Button
          clase={"bg-green-500 p-3 text-white rounded-md text-2xl"}
          children={"Refrescar"}
          evento={handleRefresh}
        />
      </div>
    </div>
  );
};

export default Main;
