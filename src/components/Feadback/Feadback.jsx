import React from 'react';

export const FeedbackMurkup = ({
  onButtonBad,
  onButtonGood,
  onButtonNeutural,
}) => {
  return (
    <div>
      <div className="Fedback-buttons">
        <button type="button" onClick={onButtonGood}>
          Good
        </button>
        <button type="button" onClick={onButtonNeutural}>
          Neutural
        </button>
        <button type="button" onClick={onButtonBad}>
          Bad
        </button>
      </div>
    </div>
  );
};
