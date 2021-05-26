import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Form/Button';

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(350px, 1fr));
  grid-gap: 30px;
  min-height: 70vh;
  align-items: center;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  display: grid;
  align-items: center;
  img {
    border-radius: ${({ theme }) => theme.sizes.radius};
  }
`;

const v1 = () => {
  return (
    <div className="container-full">
      <div className="grid align-center">
        <div className="col-12">
          <HeroWrapper>
            <Slide>
              <div>
                <h1>Live in joy</h1>
                <h3>Online interior design services by Spacejoy</h3>
                <p>
                  Get your room designed by professional interior designer and shop high-quality furniture and decor
                  from your favorite brands.
                </p>
                <Button>Start Project</Button>
              </div>
            </Slide>
            <Slide>
              <Image src="/images/b1.jpg" alt="spacejoy Logo" layout="fill" />
            </Slide>
            <Slide>
              <Image src="/images/b2.jpg" alt="spacejoy Logo" layout="fill" />
            </Slide>
            <Slide>
              <Image src="/images/b3.jpg" alt="spacejoy Logo" layout="fill" />
            </Slide>
          </HeroWrapper>
        </div>
      </div>
    </div>
  );
};

export default v1;
