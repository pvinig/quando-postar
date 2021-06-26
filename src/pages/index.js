import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";

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
   margin-top: 20px;
   margin-bottom: 20px;
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

const SocialMedias = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  flex-shrink: 0;

  li {
    width: 100%;
    margin: 0px 10px;
  }
`;

const SocialMediaButton = styled(motion.button)`
  width: 100%;
  height: 120px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  transition: all 0.15s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  p {
    margin-top: 6px;
    font-size: 20px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
  }

  &:hover {
    background: #fff;
    color: #222;
  }

  ${({ active }) =>
    active &&
    `
    background: #fff;
    color: #222;`}
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

const listVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const listItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const IndexPage = () => {
  const [socialMedia, setSocialMedia] = useState("");

  return (
    <Container>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
      />
      <GlobalStyle />
      <title>Home Page</title>
      <motion.h1 variants={titleVariant} initial="hidden" animate="visible">
        Qual rede social você pretende postar?
      </motion.h1>
      <SocialMedias variants={listVariant} initial="hidden" animate="visible">
        <motion.li variants={listItemVariant}>
          <SocialMediaButton
            active={socialMedia === "instagram"}
            onClick={() => setSocialMedia("instagram")}
          >
            <FaInstagram size="42px" />
            <p>Instagram</p>
          </SocialMediaButton>
        </motion.li>
        <motion.li variants={listItemVariant}>
          <SocialMediaButton
            active={socialMedia === "tiktok"}
            onClick={() => setSocialMedia("tiktok")}
          >
            <SiTiktok size="42px" />
            <p>Tiktok</p>
          </SocialMediaButton>
        </motion.li>
        <motion.li variants={listItemVariant}>
          <SocialMediaButton
            active={socialMedia === "facebook"}
            onClick={() => setSocialMedia("facebook")}
          >
            <FaFacebookSquare size="42px" />
            <p>Facebook</p>
          </SocialMediaButton>
        </motion.li>
        <motion.li variants={listItemVariant}>
          <SocialMediaButton
            active={socialMedia === "others"}
            onClick={() => setSocialMedia("others")}
          >
            <BsThreeDots size="42px" />
            <p>Outros</p>
          </SocialMediaButton>
        </motion.li>
      </SocialMedias>
    </Container>
  );
};

export default IndexPage;
