import Head from "next/head";

export default function PokemonDetay({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="container">
      <Head>
        <title>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</title>
      </Head>
      <div className="pokemonContainer">
        <div className="pokemonImage">
          <img src={pokemon.sprites.front_default} alt="" />
          <img src={pokemon.sprites.back_default} alt="" />
        </div>
        <h3 className="title">
          Name: {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <h4>
          Type:{" "}
          {pokemon.types[0].type.name[0].toUpperCase() +
            pokemon.types[0].type.name.slice(1)}
        </h4>
        <h4>Weight: {pokemon.weight} kg</h4>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 20px auto;
          align-items: space-between;
          justify-content: center;
        }

        .pokemonContainer {
          background-color: #eee;
          border-radius: 10px;
          box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
          margin: 10px;
          padding: 20px;
          text-align: center;
          color: #333;
          h3 {
            font-size: 30px;
            font-weight: bold;
          }
          h4 {
            font-size: 25px;
            color: gray;
            margin-top: 5px;
          }
        }
        .pokemonContainer {
          max-width: 90%;
        }

        .pokemonImage {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pokemonImage img {
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          width: 300px;
          margin: 20px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.url}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return {
    props: {
      pokemon,
    },
  };
}
