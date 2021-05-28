import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer``;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="container mx-auto h-64 flex items-center justify-center">
        <div className="text-center">Footer</div>
      </div>
    </Wrapper>
  );
};

export default Footer;
