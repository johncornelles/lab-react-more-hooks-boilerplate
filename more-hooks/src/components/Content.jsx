// Content.js
import React from 'react';

function Content({ content }) {
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="content-box">
      <p>{visibility ? content : 'The content is hidden'}</p>
      <button onClick={toggleVisibility}>Toggle</button>
    </div>
  );
}

export default Content;