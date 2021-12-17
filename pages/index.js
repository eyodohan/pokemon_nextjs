import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Populer from "../components/populer";

export default function Home({ pokemons }) {
  console.log(pokemons.results);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Populer pokemons={pokemons} />
    </div>
  );
}

export async function getServerSideProps() {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = await request.json();
  return {
    props: {
      pokemons,
    },
  };
}
