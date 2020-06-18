import React, { FC } from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

const App: FC = () => {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
};

export default App;
