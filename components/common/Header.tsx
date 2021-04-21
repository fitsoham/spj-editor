import React from 'react';
import { Cell, Grid } from 'styled-css-grid';

const Header = () => {
  return (
    <div className="container-full">
      <div className="grid">
        <div className="col-6">
          <Grid columns={12}>
            <Cell width={1}>1/12</Cell>
            <Cell width={1}>2/12</Cell>
            <Cell width={2}>1/6</Cell>
            <Cell width={2}>2/6</Cell>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Header;
