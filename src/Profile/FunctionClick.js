import React from 'react'

function FunctionClick( props) {
  function clickHandler(e){
    e.preventDefault();
    alert(props.Name)

  }
  console.log(props.Name)
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick