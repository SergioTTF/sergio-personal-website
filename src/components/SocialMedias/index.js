import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
    key: "Email",
    url: "mailto:sergiottfilho@gmail.com",
    hoverColor: "#952323",
  },
  {
    faIconclass: "fab fa-stack-overflow fa-fw",
    key: "StackOverflow",
    url: "https://stackoverflow.com/users/7409449/sergio23",
    hoverColor: "#f48024",
  },
];

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
        return (
          <a
            href={cn.url}
            key={cn.key}
            title={cn.key}
          >
            <Icon
              className={cn.faIconclass}
              sx={{
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: cn.hoverColor,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedias;