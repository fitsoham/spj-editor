import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mild.red};
  text-align: center;
`;

const Banner: React.FC = () => {
  return (
    <Wrapper>
      <div className="container-full">
        <div className="grid">
          <div className="col-12">
            <div>
              Season Beckons with our freshest sale. Get <strong>20% Off</strong> design packages. Use code:{' '}
              <strong>SPRING20</strong>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
