import React from 'react';
import { StatisticList, OrdinaryP } from './Statistics.styled';

export const Statistics = ({ Good, Neutural, Bad }) => {
  return (
    <div>
      <StatisticList>
        <li>Good: {Good}</li>
        <li>Neutural: {Neutural}</li>
        <li>Bad: {Bad}</li>
      </StatisticList>
    </div>
  );
};

export const Total = ({ Total, persentage }) => {
  return (
    <>
      <OrdinaryP>Total: {Total}</OrdinaryP>
      <OrdinaryP>Positive feedback: {persentage} %</OrdinaryP>
    </>
  );
};

export const DefaultText = ({ text }) => {
  return <OrdinaryP>there is no feed</OrdinaryP>;
};
