import { useState } from 'react';

export default function Clock(props) {
  let propColor = props.color
  return (
    <h1 style={{ color: propColor }}>
      {props.time}
    </h1>
  );
}
