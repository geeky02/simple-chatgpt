import React from 'react';

interface TextBlockProps {
  text: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default TextBlock;
