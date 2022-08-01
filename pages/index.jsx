import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
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
      <Contact />
    </main>
  );
};

export default Index;
