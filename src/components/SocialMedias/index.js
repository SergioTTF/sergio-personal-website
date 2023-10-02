import React, { useEffect } from 'react';
import {NotificationManager} from 'react-notifications';
import { loadCSS } from 'fg-loadcss';
import Icon from '@mui/material/Icon';

const socialLinks = [
  {
    faIconclass: "fab fa-linkedin fa-fw",
    key: "Linkedin",
    url: "https://www.linkedin.com/in/sergiottfilho",
    hoverColor: "#0e76a8",
  },
  {
    faIconclass: "fab fa-github fa-fw",
    key: "GitHub",
    url: "https://github.com/SergioTTF",
    hoverColor: "#6cc644",
  },
  {
    faIconclass: "fab fa-twitter fa-fw",
    key: "Twitter",
    url: "https://twitter.com/SergioT45",
    hoverColor: "#1DA1F2",
  },
  {
    faIconclass: "fas fa-envelope fa-fw",
    key: "Copy Email",
    url: "sergiottfilho@gmail.com",
    hoverColor: "#952323",
    copyLink: true,
  },
  {
    faIconclass: "fab fa-stack-overflow fa-fw",
    key: "StackOverflow",
    url: "https://stackoverflow.com/users/7409449/sergio23",
    hoverColor: "#f48024",
  },
];

function showCopiedEmailNotification(email)  {
  NotificationManager.success('', 'Email address copied!');
  navigator.clipboard.writeText(email)
}
function SocialMedias() {
  useEffect(() => {
    const node = loadCSS(
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);
  return (
    <div>
      {socialLinks.map(cn => {
        if(cn.copyLink) {
          return (
            <a
              href="#"
              key={cn.key}
              title={cn.key}
              onClick={() => showCopiedEmailNotification(cn.url)}
            >
              <Icon
                className={cn.faIconclass}
                sx={{
                  fontSize: 40,
                  marginTop: 1,
                  marginRight: 1,
                  transition: "transform 250ms",
                  '&:hover': {
                    color: cn.hoverColor,
                    transform: "translateY(-10px)",
                  },
                }}
              />
            </a>
          );
        } else {
          return (
            <a
            className='floatingIcon'
              href={cn.url}
              key={cn.key}
              title={cn.key}
            >
              <Icon
                className={cn.faIconclass}
                sx={{
                  fontSize: 40,
                  marginTop: 1,
                  marginRight: 1,
                  transition: "transform 250ms",
                  '&:hover': {
                    color: cn.hoverColor,
                    transform: "translateY(-10px)",
                  },
                }}
              />
            </a>
          );
        }
      })}
    </div>
  );
}

export default SocialMedias;