import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from './Form/Button';

const NavWrapper = styled.nav`
  font-size: 0.9rem;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      display: inline-block;
      padding: 0 1rem;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <div className="container-full">
      <div className="grid align-center">
        <div className="col-xl-1 col-md-2 col-sm-3 col-3">
          <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
        </div>
        <div className="col-4">
          <NavWrapper>
            <ul>
              <li>Ideas</li>
              <li>Stories</li>
              <li>Quiz</li>
              <li>Pricing</li>
            </ul>
          </NavWrapper>
        </div>
        <div className="col-2">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
