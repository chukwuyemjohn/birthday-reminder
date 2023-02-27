import React from 'react';

const List = ({staff}) => {
  return (
    <>
    {staff.map((item) =>{
      const{age,image,name,id} = item;
      return (
        <article key={id} className='person'>
          <img src={image} alt={name} />
         <div>
            <h3>{name}</h3>
            <p>{age} years </p>
          </div>
        </article>
      );
    })}
    </>
  );
};

export default List;
