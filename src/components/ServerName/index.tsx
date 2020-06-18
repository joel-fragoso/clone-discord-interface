import React, { FC } from 'react';

import {
  Container,
  Title,
  ExpandIcon
} from './styles';

const ServerName: FC = () => {
  return (
    <Container>
      <Title>Servidor do Discord</Title>
      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
