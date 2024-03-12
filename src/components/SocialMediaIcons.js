// src/components/SocialMediaIcons.js
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram'; // Import TelegramIcon
import data from './Data/data';

const { Bio } = data;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 8px;
  font-size: 5px;
  color: red;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: yellow;
  }
`;

function SocialMediaIcons() {
  const emailLink = `mailto:${Bio.email}`;
  const whatsappLink = `https://wa.me/${Bio.whatsappNumber}`;
  const telegramLink = `https://t.me/${Bio.telegramUsername}`; // Replace with the actual Telegram username

  return (
    <>
      <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={emailLink}>
        <MailOutlineIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={telegramLink} target="_blank" rel="noopener noreferrer">
        <TelegramIcon />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </SocialMediaIcon>
    </>
  );
}

export default SocialMediaIcons;
