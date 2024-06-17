import React from 'react';
import Avatar from '../atoms/avatar';
import TextBlock from '../atoms/textblock';

interface UserQuestionProps {
  avatarUrl: string;
  questionText: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ avatarUrl, questionText }) => {
  return (
    <div className="flex items-center">
      <Avatar imageUrl={avatarUrl} />
      <TextBlock text={questionText} />
    </div>
  );
};

export default UserQuestion;
