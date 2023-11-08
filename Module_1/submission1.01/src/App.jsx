const Header=({headerContent})=>{
  return(
      <div>
        <h1>
          {headerContent};
        </h1>
      </div>
  );
}

const Content=({p,e})=>{
  return(
  <>
      <p>{p} {e}</p>
  </>);
}

const Total=({frst,scnd,third})=>{
  return(
    <div>
      <p>Number of exercises{frst+scnd+third}</p>
    </div>
  )
}

function App() {
  const p1="Fundamentals of React"
  const p2="Using props to pass data"
  const p3="State of a component"
  const e1=10;
  const e2=7;
  const e3=14;
  
  return (
    <>
      <Header headerContent={"Half Stack application development"}/>
      <Content p={p1} e={e1}/>
      <Content p={p2} e={e2}/>
      <Content p={p3} e={e3}/>
      <Total frst={e1} scnd={e2} third={e3}/>
    </>
  )
}

export default App
