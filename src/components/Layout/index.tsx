import React, { FC } from 'react';

import {
  Grid,
} from './styles';

import ServerList from '../ServerList';

const Layout: FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  );
};

export default Layout;
