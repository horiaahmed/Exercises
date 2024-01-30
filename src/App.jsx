// 1.3
 //const Header =(props)=>{
//   return <div><h1>{props.course}</h1></div>
// }
// const Part=(props)=>{
//   return <div>
//   <p>
//     {props.name} {props.exercises}
//     </p> 
//   </div>
// }
// const Part1=(p1)=>{
//   return <Part name={p1.part1} exercises={p1.exercises1}/>
// }
// const Part2=(p2)=>{
//   return <Part name={p2.part2} exercises={p2.exercises2}/>
// }
// const Part3=(p3)=>{
//   return <Part name={p3.part3} exercises={p3.exercises3}/>
// }
// const Content =(props)=>{
//   return <div>
//     <Part1 part1={props.part1} exercises1={props.exercises1}/>
//     <Part2 part2={props.part2} exercises2={props.exercises2}/>
//     <Part3 part3={props.part3} exercises3={props.exercises3}/>

//      </div>
// }
// const Total=(props)=>{
//   return <div> <p>Number of exercises {props.total} </p></div>
// }
// const App =()=>{
//   const course = 'Half Stack application development'
//   const part1 ={
//     name:'Fundamentals of React',
//     exercises:10
//   } 
//   const part2 ={
//     name:'Using props to pass data',
//     exercises:7
//   } 
//   const part3 ={
//     name:'State of a component',
//     exercises:14

//   } 
//   const total=part1.exercises+part2.exercises+part3.exercises
//   return <div>
//    <Header course={course}/>
//    <Content part1={part1.name} exercises1={part1.exercises}  
//    part2={part2.name} exercises2={part2.exercises}
//    part3={part3.name} exercises3={part3.exercises}/>
//    <Total total={total}/>
//   </div>
// }
//1.4
// const Header =(props)=>{
//   return <div><h1>{props.course}</h1></div>
// }
// const Part=(props)=>{
//   return <div>
//   <p>
//     {props.name} {props.exercises}
//     </p> 
//   </div>
// }
// const Part1=(p1)=>{
//   return <Part name={p1.part1} exercises={p1.exercises1}/>
// }
// const Part2=(p2)=>{
//   return <Part name={p2.part2} exercises={p2.exercises2}/>
// }
// const Part3=(p3)=>{
//   return <Part name={p3.part3} exercises={p3.exercises3}/>
// }
// const Content =(props)=>{
//   return <div>
//     <Part1 part1={props.part1} exercises1={props.exercises1}/>
//     <Part2 part2={props.part2} exercises2={props.exercises2}/>
//     <Part3 part3={props.part3} exercises3={props.exercises3}/>

//      </div>
// }
// const Total=(props)=>{
//   return <div> <p>Number of exercises {props.total} </p></div>
// }
// const App =()=>{
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   const total=parts[0].exercises+parts[1].exercises+parts[2].exercises
//   return <div>
//    <Header course={course}/>
//    <Content part1={parts[0].name} exercises1={parts[0].exercises}  
//    part2={parts[1].name} exercises2={parts[1].exercises} 
//    part3={parts[2].name} exercises3={parts[2].exercises} />
//    <Total total={total}/>
//   </div>
// }
1.5
const Header =(props)=>{
  return <div><h1>{props.course}</h1></div>
}
const Part=(props)=>{
  return <div>
  <p>
    {props.name} {props.exercises}
    </p> 
  </div>
}
const Part1=(p1)=>{
  return <Part name={p1.part1} exercises={p1.exercises1}/>
}
const Part2=(p2)=>{
  return <Part name={p2.part2} exercises={p2.exercises2}/>
}
const Part3=(p3)=>{
  return <Part name={p3.part3} exercises={p3.exercises3}/>
}
const Content =(props)=>{
  return <div>
    <Part1 part1={props.part1} exercises1={props.exercises1}/>
    <Part2 part2={props.part2} exercises2={props.exercises2}/>
    <Part3 part3={props.part3} exercises3={props.exercises3}/>

     </div>
}
const Total=(props)=>{
  return <div> <p>Number of exercises {props.total} </p></div>
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
const total=course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises
  return <div>
   <Header course={course.name}/>
   <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}  
   part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
   part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
   <Total total={total}/>
  </div>
}
export default App;