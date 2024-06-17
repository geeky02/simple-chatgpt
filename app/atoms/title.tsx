// components/atoms/Title.tsx
import React from 'react';

interface TitleProps {
  textColor: string;
  text: string;
}

const Title: React.FC<TitleProps> = ({ textColor, text }) => {
  return <h1 style={{ color: textColor }}>{text}</h1>;
};

export default Title;
