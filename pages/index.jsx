import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Foreword from "../components/Foreword";
import Skills from "../components/Skills";

const Index = () => {
  return (
    <main>
      <Head>
        <title>Guilherme Araújo</title>
      </Head>
      <Foreword />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
