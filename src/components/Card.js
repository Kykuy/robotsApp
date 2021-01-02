import React, { useEffect, useState } from 'react';

const Card = (props) => {
  const [ hovered, setHover ] = useState(false);
  
  let style = {
    background: 'scroll',
    backgroundImage: `url(https://robohash.org/${props.id}?size=300x300)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',       
  };

  let [ hoveredStyle, setStyle ] = useState(style);

  useEffect(() => {
    //let width = window.getComputedStyle(document.querySelector('article')).width.slice(0, 3);
    //let height = window.getComputedStyle(document.querySelector('article')).height.slice(0, 3);
    setStyle({
      background: 'scroll',
      backgroundImage: `linear-gradient( 115deg, rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.8) ), 
      url(https://robohash.org/${props.id}?size=300x300)`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundClip: 'padding-box',
      // display: 'flex',
      // flexFlow: 'column wrap',
      // justifyContent: 'center',
      // alignItems: 'center',    
    });
  }, [props.id])

  return (
    <article className = {`pa2 ma2 br2 bg-light-green grow ba b--black-30 bw1 shadow-5 tc item`}
     onMouseOver = {() => setHover(true)} 
     onMouseLeave = {() => setHover(false)} 
     style = {hovered ? hoveredStyle : {}}    
     >
      <img src={`https://robohash.org/${props.id}?size=300x300`} alt="avatar" className = {`tc ${hovered ? 'hidden' : ''}`}/>
      <div>
        <h2>{props.name}</h2>
        <p className = {`${hovered ? '' : 'hidden'}`}>Username: <span className = {`${hovered ? 'bold' : ''}`}>{props.username}</span></p>
        <p className = {`${hovered ? '' : 'hidden'}`}>From: <span className = {`${hovered ? 'bold' : ''}`}>{props.address}</span></p>
        <p><span className = {`${hovered ? '' : 'hidden'}`}>email: </span><span className = {`${hovered ? 'bold' : ''}`}>{props.email}</span></p>
        <p className = {`${hovered ? '' : 'hidden'}`}>Works at: <span className = {`${hovered ? 'bold' : ''}`}>{props.company}</span></p>
      </div>
    </article>
  );
}

// class Card extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mousedOver: false,
//     }
//   }

//   render() {        
//     return (
//       <article className = "dib pa2 ma2 br2 bg-light-green grow ba b--black-30 bw1 shadow-5 tc">
//         <img src={`https://robohash.org/${this.props.id}?size=300x300`} alt="avatar" className = 'tc'/>
//         <div>
//           <h2>{this.props.name}</h2>
//           <p>{this.props.email}</p>
//         </div>
//       </article>
//     );
//   }
// }

export default Card;