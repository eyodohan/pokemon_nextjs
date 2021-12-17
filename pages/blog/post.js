import Head from "next/head";
import Link from "next/link";

export default function Post() {
  return (
    <div>
      <Head>
        <title>BlogPost</title>
      </Head>
      <h3>Post page</h3>
      <Link href="/">Geri dön</Link>
    </div>
  );
}
