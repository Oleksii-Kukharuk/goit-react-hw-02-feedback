import React from 'react';

export const Statistics = ({ Good, Neutural, Bad }) => {
  return (
    <div>
      <ul>
        <li>Good: {Good}</li>
        <li>Neutural: {Neutural}</li>
        <li>Bad: {Bad}</li>
      </ul>
    </div>
  );
};

export const Total = ({ Total, persentage }) => {
  return (
    <>
      <p>Total: {Total}</p>
      <p>Positive feedback: {persentage} %</p>
    </>
  );
};
