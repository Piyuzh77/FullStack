const Header=({headerContent})=>{
  return(
      <div>
        <h1>
          {headerContent};
        </h1>
      </div>
  );
}

const Part=()=>{
  const p= "Fundamentals of React"; const ex=10; const p2="Using props to pass data"; const ex2=7; const p3="State of the component"; const ex3=14
  return(
  <>
      <p>{p} {ex}</p>
      <p>{p2} {ex2}</p>
      <p>{p3} {ex3}</p>
  </>);
}

const Total=()=>{

  return(
    <div>
      <p>Number of exercises {10+7+14}</p>
    </div>
  )
}

function App() {
  
  return (
    <>
      <Header headerContent={"Half Stack application development"}/>
      <Part/>
      <Total/>
    </>
  )
}

export default App
