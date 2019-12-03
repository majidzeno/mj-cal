import React from 'react';
import styles from './styles.css';
export const dayGenerator = (newClasses, i) => {
  // var classesArr = newClasses.split(' ').map(class=>{
  //    styles.class
  // })

  return (
    <td className={newClasses} key={i}>
      {i}
    </td>
  )
};
