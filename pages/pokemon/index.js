import { useRouter } from "next/router";

export default function Pokemon() {
  const router = useRouter();
  const { url } = router.query;

  return <p>Pokemon:{url}</p>;
}
