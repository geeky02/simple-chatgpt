// components/atoms/ResultButton.tsx
import React from 'react';

interface ResultButtonProps {
  textColor: string;
  backgroundColor: string;
  onClick: () => void;
}

const ResultButton: React.FC<ResultButtonProps> = ({ textColor, backgroundColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ color: textColor, backgroundColor }}
      className="p-2 rounded"
    >
      Result
    </button>
  );
};

export default ResultButton;
