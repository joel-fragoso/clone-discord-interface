import React, { FC, useRef, useEffect, MutableRefObject } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from './styles';

const ChannelData: FC = () => {
  const messagesRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const messagesDiv = messagesRef.current;

    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Joel Fragoso"
            date="19/06/2020"
            content="Eu termino esse projeto hoje."
          />
        ))}
        <ChannelMessage
          author="Joel Fragoso"
          date="19/06/2020"
          content={
            <>
              <Mention>@Joel Fragoso</Mention>, me carrega no LoL e CS de novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
