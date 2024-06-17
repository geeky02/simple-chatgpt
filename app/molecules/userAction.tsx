import React from 'react';
import ResultButton from '../atoms/button';
import QuestionInput from '../atoms/input';
import Title from '../atoms/title';

interface UserActionProps {
  titleTextColor: string;
  titleText: string;
  resultTextColor: string;
  resultBackgroundColor: string;
  onResultClick: () => void;
}

const UserAction: React.FC<UserActionProps> = ({
  titleTextColor,
  titleText,
  resultTextColor,
  resultBackgroundColor,
  onResultClick,
}) => {
  return (
    <div>
      <Title textColor={titleTextColor} text={titleText} />
      <QuestionInput />
      <ResultButton textColor={resultTextColor} backgroundColor={resultBackgroundColor} onClick={onResultClick} />
    </div>
  );
};

export default UserAction;
