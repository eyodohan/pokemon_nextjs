import Link from "next/link";

export default function Populer({ pokemons }) {
  return (
    <>
      <div className="title">
        <h3>Pokemonlar</h3>
      </div>
      <div className="pokemonContainer">
        {pokemons.results.map((pokemon, index) => (
          <Link href={`/pokemon/${index + 1}`} key={index}>
            <a className="pokemon">
              <div className="pokemonImage">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    index + 1
                  }.svg`}
                  alt=""
                />
              </div>
              <h4>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h4>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .title {
          margin: 10px 50%;
          display: flex;
          justify-content: center;
        }

        .title h3 {
          font-weight: 400;
          font-size: 30px;
        }

        .pokemonContainer {
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          align-items: space-between;
          justify-content: center;
        }

        .pokemon {
          background-color: #eee;
          border-radius: 10px;
          box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
          margin: 10px;
          padding: 20px;
          text-align: center;
          text-decoration: none;
          color: #333;
        }

        .pokemon h4 {
          margin-top: 10px;
        }

        .pokemonImage {
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          width: 120px;
          height: 120px;
          text-align: center;
        }

        .pokemonImage img {
          max-width: 90%;
          margin-top: 5px;
        }
      `}</style>
    </>
  );
}
