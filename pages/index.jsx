import Head from "next/head";
import About from "../components/About";
import Foreword from "../components/Foreword";

const Index = () => {
  return (
    <main>
      <Head>
        <title>Guilherme Araújo</title>
      </Head>
      <Foreword />
      <About />
    </main>
  );
};

export default Index;
