import React from 'react'
import RatingCard from './RatingCard';


function RatingCardList({ list, showDetail }) {
  return (
    <div>
      {showDetail && (
        <div
        className='bordered standard-padding standard-margin'
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 5,
            alignItems: "start",
          }}
        >
          {list.map((skill, index) => {
            return (
              <RatingCard
                key={index}
                title={skill.name}
                rating={skill.rating}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

RatingCardList.defaultProps = {
    list: Array
}

export default RatingCardList
