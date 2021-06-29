import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import SocialMedias from "../components/SocialMedias";
import suggestedHours from "../utils/suggestedHours";
import { Helmet } from "react-helmet";
import Segments from "../components/Segments";

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: linear-gradient(#c51162, #fd558f);
   color: #FFF;
   font-family: 'Nunito Sans', sans-serif;
 }

 h1 {
   text-transform: uppercase;
   text-align: center;
   margin-top: 30px;
   margin-bottom: 30px;
   font-weight: 800;
 }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const titleVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const IndexPage = () => {
  const [socialMedia, setSocialMedia] = useState("");
  const [segment, setSegment] = useState("");

  return (
    <Container>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
      />
      <GlobalStyle />
      <Helmet
        title="Qual o melhor horário para postar nas redes sociais? Quando Postar"
        defer={false}
      />
      <AnimatePresence>
        {!socialMedia && (
          <motion.h1 variants={titleVariant} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
            Qual rede social você pretende postar?
          </motion.h1>
        )}
      </AnimatePresence>
      <SocialMedias value={socialMedia} setValue={setSocialMedia} />
      <AnimatePresence>
          {socialMedia && (
            <motion.h1 variants={titleVariant} initial="hidden" animate="visible">
              Ótimo! Qual o seu segmento?
            </motion.h1>
          )}
      </AnimatePresence>
      {socialMedia && (<Segments value={segment} setValue={setSegment} />)}
    </Container>
  );
};

export default IndexPage;
