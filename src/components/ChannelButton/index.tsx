import React, { FC } from 'react';

import {
  Button,
  HashtagIcon,
  InviteIcon,
  SettingsIcon,
} from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Button className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Button>
  );
};

export default ChannelButton;
