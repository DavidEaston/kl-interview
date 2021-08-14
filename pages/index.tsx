import type { NextPage } from "next";
import Head from "next/head";
import BaseLayout from "../layouts/BaseLayout";
import LoginPanel from "../components/user/login/LoginPanel";

const Home: NextPage = () => {
  return (
    <BaseLayout center={true}>
      <Head>
        <title>Login Page Example</title>
        <meta
          name="description"
          content="Kidsloop Login page example powered by nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPanel message="boop" />
    </BaseLayout>
  );
};

export default Home;
