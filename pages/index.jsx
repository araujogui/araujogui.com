import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Foreword from "../components/Foreword";

const Index = () => {
  return (
    <main>
      <Head>
        <title>Guilherme Araújo</title>
      </Head>
      <Foreword />
      <About />
      <Experience />
    </main>
  );
};

export default Index;
