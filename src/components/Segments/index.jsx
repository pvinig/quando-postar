import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  list-style-type: none;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  flex-shrink: 0;

  li {
    width: 100%;
    margin: 0px 10px;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  height: 80px;
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

const Segments = ({ value, setValue }) => {
  const setSocialMedia = (value) => setValue(value);
  const segments = [
    {
      id: "healthcare",
      label: "Saúde",
    },
    {
      id: "media",
      label: "Imprensa",
    },
    {
      id: "education",
      label: "Educação",
    },
    {
      id: "nonprofit",
      label: "ONGs",
    },
    {
      id: "restaurants",
      label: "Restaurantes",
    },
    {
      id: "tech",
      label: "Tecnologia",
    },
    {
      id: "travel",
      label: "Turismo",
    },
    {
      id: "finances",
      label: "Finanças",
    },
    {
      id: "hospitality",
      label: "Hospedaria",
    },
    {
      id: "others",
      label: "Outros",
    },
  ];
  return (
    <Wrapper variants={listVariant} initial="hidden" animate="visible">
      {segments.map((segment) => (
        <motion.li variants={listItemVariant}>
          <Button
            active={value === segment.id}
            onClick={() => setSocialMedia(segment.id)}
          >
            <p>{segment.label}</p>
          </Button>
        </motion.li>
      ))}
    </Wrapper>
  );
};

export default Segments;
