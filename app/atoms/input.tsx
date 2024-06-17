import React, { useState } from 'react';

const QuestionInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border p-2 rounded"
    />
  );
};

export default QuestionInput;
