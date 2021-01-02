import React from 'react';

const Scroll = (props) => {
  return (    
    <section className = 'scrollbar'>
      {props.children}
    </section>    
  ); 
}; 

export default Scroll;