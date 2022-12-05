import React from 'react';
import { Button, Wraper } from './Feadback.styled';

export const FeedbackMurkup = ({ onClick }) => {
  return (
    <div>
      <Wraper>
        <Button type="button" name="good" onClick={onClick}>
          Good
        </Button>
        <Button type="button" name="neutural" onClick={onClick}>
          Neutural
        </Button>
        <Button type="button" name="bad" onClick={onClick}>
          Bad
        </Button>
      </Wraper>
    </div>
  );
};
