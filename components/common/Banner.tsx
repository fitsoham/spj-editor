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
            <div>Season Beckons with our freshest sale. Get 20%Off design packages. Use code: SPRING20 </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
