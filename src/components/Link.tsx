import React from 'react';
// Packages
import styled from 'styled-components';

interface LinkProps {
  href: string;
  target: string;
  rel?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, target, rel = 'noreferrer', children }) => {
      /**
   * @Render
   */
  return (
    <LinkWrapper href={href} target={target} rel={rel}>
      {children}
    </LinkWrapper>
  );
};

export { Link, LinkProps };

const LinkWrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
`;
