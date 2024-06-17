import React from 'react';
import Avatar from '../atoms/avatar';
import TextBlock from '../atoms/textblock';

interface BotResponseProps {
  avatarUrl: string;
  responseText: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ avatarUrl, responseText }) => {
  return (
    <div className="flex items-center">
      <Avatar imageUrl={avatarUrl} />
      <TextBlock text={responseText} />
    </div>
  );
};

export default BotResponse;
