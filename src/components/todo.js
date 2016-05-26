import React, { Proptypes } from 'react';

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
);

Todo.propTypes = {
  text: Proptypes.string.isRequired,
};
