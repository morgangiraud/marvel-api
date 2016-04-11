import React from 'react';
import _ from 'lodash';

const SuperHeroCard = ({ superHero }) => {
  let imgURL = superHero.thumbnail.path + '.' + superHero.thumbnail.extension;

  let urls = _.map(superHero.urls, (obj, k) => {
    return (
      <li 
        key={`${superHero.id}-${k}`} 
        style={{
          marginRight: 5
        }}
        className="label label-primary"
      >
        <a href={obj.url} target="_blank" style={{
          color: 'white',
          textDecoration: 'none'
        }}>{_.capitalize(obj.type)}</a>
      </li>
    )
  });

  return (
    <li style={{
      display: 'inline-block',
      marginRight: 30,
      marginBottom: 30
    }}>
      <div style={{
        width: 170,
        height: 170,
        overflow: 'hidden'
      }}>
        <img 
          className="img-responsive center-block" 
          src={ imgURL } 
          alt=""
        />
      </div>
      <div style={{
        fontSize: 14
      }}
      className="text-center"
      >
        { superHero.name }
      </div>
      <ul style={{
        listStyle: 'none',
        paddingLeft: 0
      }} className="text-center">
        { urls }
      </ul>
    </li>
  ) 
}

SuperHeroCard.propTypes = {
  superHero: React.PropTypes.object
}

export default SuperHeroCard;