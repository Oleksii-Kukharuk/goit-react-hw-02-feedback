import React from 'react';
import { Button, Wraper } from './Feadback.styled';

export const FeedbackMurkup = ({
  onButtonBad,
  onButtonGood,
  onButtonNeutural,
}) => {
  return (
    <div>
      <Wraper>
        <Button type="button" onClick={onButtonGood}>
          Good
        </Button>
        <Button type="button" onClick={onButtonNeutural}>
          Neutural
        </Button>
        <Button type="button" onClick={onButtonBad}>
          Bad
        </Button>
      </Wraper>
    </div>
  );
};
