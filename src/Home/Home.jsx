import React from "react";
import Head from "../Head/Head";
// My Components
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";

const Home = () => {
  return (
    <div className="main">
      <Head title="Início" />
      <Text h1="Início" />
      <div className="warning">
        Este é o meu portfólio antigo. Caso queira ver a versão atualizada,
        acesse meu portfólio principal em{" "}
        <a href="https://marcuscoelho.com" target="_blank">
          marcuscoelho.com
        </a>
        .
      </div>
      <Text
        h2="Sobre mim"
        pArray={[
          "Me chamo Marcus, atuo como Front-end Developer e estou cursando Sistemas de Informação na UNIFESSPA.",
          "Estou sempre em busca de novos desafios e conhecimentos. Gosto de estudar e, atualmente, estou focado em desenvolvimento web.",
          "Também crio games no tempo livre e estou sempre em busca de novas maneiras de expandir meu conhecimento.",
        ]}
      />
      <Button to="stack/dev-stack">Veja minhas skills</Button>
      <Text
        h2="Experiência Profissional"
        h3="🦎 Exception Jr"
        pArray={[
          "• Jul 2024 - o momento",
          "Empresa júnior da faculdade de Sistemas de Informação na UNIFESSPA, onde atuo como Full Stack Developer.",
        ]}
      />
      <Text
        h3="🐴 Steed"
        pArray={[
          "• Jan 2024 - o momento",
          "Sou fundador e Full Stack Developer de uma startup especializada em desenvolvimento de websites.",
        ]}
      />
    </div>
  );
};

export default Home;
