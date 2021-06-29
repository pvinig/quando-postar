import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";

const socialMedias = [
  {
    id: "instagram",
    label: "Instagram",
    icon: <FaInstagram size="42px" />,
  },
  {
    id: "tiktok",
    label: "Tiktok",
    icon: <SiTiktok size="42px" />,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: <FaFacebookSquare size="42px" />,
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: <FaTwitter size="42px" />,
  },
  {
    id: "others",
    label: "Outros",
    icon: <BsThreeDots size="42px" />,
  },
];

export const getSocialMedia = (value) =>
  socialMedias.find(({ id }) => id === value);

export default socialMedias;
