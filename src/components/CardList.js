import React, {Fragment} from 'react';
import Card from './Card';

// const CardList = ( {robots} ) => {
//   const cards = robots.map( (item, index) => {
//     return <Card
//     key = {item.id}
//     id = {item.id} 
//     name = {item.name} 
//     email = {item.email}/>;      
//   });
//   return (    
//     <Fragment>
//       {cards}
//     </Fragment>
//   );
// }

const CardList = ( {robots} ) => {
  const cards = robots.map( (item, index) => {
    return <Card
    key = {item.id}
    id = {item.id} 
    name = {item.name} 
    username = {item.username}
    address = {item.address.city}
    email = {item.email}
    company = {item.company.name}  
    />;      
  });
  return (    
    <Fragment>
      {cards}
    </Fragment>
  );
}

export default CardList;