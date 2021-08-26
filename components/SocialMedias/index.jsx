import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import socialMedias from "../../utils/socialMedias";

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

const Wrapper = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 40px;
  li {
    width: 100%;
    margin: 0px 10px;
  }
  @media (max-width: 800px){
     display:grid;
     grid-template-columns: repeat(3, 1fr);
     justify-content: center;
     grid-gap: 20px;
     
  }
  @media (max-width: 550px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 20px;
    max-width: 450px;
  
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  height: 110px;
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

const SocialMedias = ({ value, setValue }) => {
  const setSocialMedia = (value) => setValue(value);

  return (
    <Wrapper variants={listVariant} initial="hidden" animate="visible">
      {socialMedias.map(({ id, label, icon }) => (
        <motion.li key={id} variants={listItemVariant}>
          <Button
            active={value === id}
            onClick={() => setSocialMedia(id)}
          >
            {icon}
            <p>{label}</p>
          </Button>
        </motion.li>
      ))}
    </Wrapper>
  );
};

export default SocialMedias;
