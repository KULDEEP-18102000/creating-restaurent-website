import React, { useMemo,useState } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const [ascending,setAscending]=useState(true)

//   const buttonValue=ascending?"sort in descending":"sort in ascending"
let buttonValue;
if(ascending===true){
    buttonValue="sort in descending"
}else{
    buttonValue="sort in ascending"
}


//   const sortedList = useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => a - b);
//   }, [items]); 
//   console.log('DemoList RUNNING');

const ascending_sorted=[...items.sort((a, b) => a - b)];

// const ascending_sorted=[...useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => a - b);
//   }, [items])]
//   console.log(ascending_sorted)

const descending_sorted=[...items.sort((a, b) => b-a)];

//   const descending_sorted=[...useMemo(() => {
//     console.log('Items sorted');
//     return items.sort((a, b) => b-a);
//   }, [items])];
//   console.log(descending_sorted)

let sortedList;
if(ascending===true){
    console.log("inside ascending true")
    console.log(ascending_sorted)
    console.log(descending_sorted)
    sortedList=[...ascending_sorted]
    console.log(sortedList)
}else{
    console.log("inside descending true")
    sortedList=[...descending_sorted]
    console.log(sortedList)
}
// const sortedList=ascending?ascending_sorted : descending_sorted
       

  const sortHandler=()=>{
    console.log("sort handler")
    console.log(ascending)
    setAscending(!ascending)
  }

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={sortHandler}>{buttonValue}</button>
    </div>
  );
};

export default React.memo(DemoList);