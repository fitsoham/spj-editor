import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from './Form/Button';

const HeaderLogoAndNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.nav`
  font-size: 0.85rem;
  display: inline-block;
  margin-left: 2rem;
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
        <div className="col-8">
          <HeaderLogoAndNavWrapper>
            <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
            <NavWrapper>
              <ul>
                <li>Ideas</li>
                <li>Stories</li>
                <li>Quiz</li>
                <li>Pricing</li>
              </ul>
            </NavWrapper>
          </HeaderLogoAndNavWrapper>
        </div>
        <div className="col-4">
          <div className="text-right">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
