import React, { useState } from 'react';

function OpenForms({ props }) {
  //   const [isShown, setIsShown] = useState(false);

  //   const handleClick = (e) => {
  //     // setIsShown((current) => !current);
  //     setIsShown(true);
  //   };

  //   return (
  //     <div className="form">
  //       <button onClick={handleClick}>Click</button>

  //       {props.children}
  //     </div>
  //   );
  return <div className="form">{props.children}</div>;
}

export default OpenForms;
