import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
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
  display: flex;
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

const SocialMedias = ({ value, setValue }) => {
  const setSocialMedia = (value) => setValue(value);

  return (
    <Wrapper variants={listVariant} initial="hidden" animate="visible">
      <motion.li variants={listItemVariant}>
        <Button
          active={value === "instagram"}
          onClick={() => setSocialMedia("instagram")}
        >
          <FaInstagram size="42px" />
          <p>Instagram</p>
        </Button>
      </motion.li>
      <motion.li variants={listItemVariant}>
        <Button
          active={value === "tiktok"}
          onClick={() => setSocialMedia("tiktok")}
        >
          <SiTiktok size="42px" />
          <p>Tiktok</p>
        </Button>
      </motion.li>
      <motion.li variants={listItemVariant}>
        <Button
          active={value === "facebook"}
          onClick={() => setSocialMedia("facebook")}
        >
          <FaFacebookSquare size="42px" />
          <p>Facebook</p>
        </Button>
      </motion.li>
      <motion.li variants={listItemVariant}>
        <Button
          active={value === "twitter"}
          onClick={() => setSocialMedia("twitter")}
        >
          <FaTwitter size="42px" />
          <p>Twitter</p>
        </Button>
      </motion.li>
      <motion.li variants={listItemVariant}>
        <Button
          active={value === "others"}
          onClick={() => setSocialMedia("others")}
        >
          <BsThreeDots size="42px" />
          <p>Outros</p>
        </Button>
      </motion.li>
    </Wrapper>
  );
};

export default SocialMedias;
