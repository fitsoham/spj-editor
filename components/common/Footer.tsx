import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer``;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="container-full">
        <div className="grid">
          <div className="col-12 text-center">
            <div>Footer</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
