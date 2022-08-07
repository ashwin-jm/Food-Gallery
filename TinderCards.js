import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinkerCards() {

  const [foods,setFood] = React.useState([
    {
      name:'Barbeque',
      url: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/07/24724.jpg'
    },
    {
      name:'Burger',
      url: 'https://elements.evonik.com/wp-content/uploads/2019/11/burger-fb.jpg'
    },
    {
      name:'Sandwich',
      url: 'https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800'
    },
    {
      name:'French Fries',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GBJTdpyhhGmzf-dZrDo-hKznnH1YbNKnpw&usqp=CAU'
    },
    {
      name:'Pizza',
      url: 'https://i.pinimg.com/originals/74/b8/c8/74b8c86f1f5647c5522fc68d56c2acb4.jpg'
    },
    {
      name: 'Fried Chicken',
      url: 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'
    }
  ]);
  return (
    <>
      <div className="writing">
        <h3 style ={{fontFamily:'Honest Script'}}>Good food is the foundation of genuine happiness!</h3>
      </div>
      <div  className="cardContainer">
        {foods.map( food => (
          <TinderCard 
            className="swipe" 
            keys={food.name} 
            preventSwipe={['up', 'down',]}
          >
            <div
              style={{backgroundImage: `url(${food.url})`}}
              className="card"
            >
              <h1>{food.name}</h1>
            </div>
          </TinderCard>
        ))}

      </div>
    </>
  )
}

export default TinkerCards;