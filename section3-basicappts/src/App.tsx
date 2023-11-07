
 import  CourseGoal  from "./components/CourseGoal";
import  Header  from "./components/Header";
import goalsImg from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoalForm from "./components/NewGoalForm";

export type CourseGoal = {
  title:string,
  description:string,
  id:number
}

export default function App() {
const[goals,setGoals]=useState<CourseGoal[]>([]);


const handleAddGoal = (goal:{title:string,summary:string}) => {
  setGoals( (prevGoals)=>{
    const newId= Math.random();
     const newGoal:CourseGoal = {title:goal.title,description:goal.summary,id:newId}
    const newGoals = [...prevGoals,newGoal];
    return newGoals;
  }
  )
  console.log("add goal")
  

}
const handleDeleteGoal = (id:number) => {
  setGoals( (prevGoals)=>{

    const newGoals = prevGoals.filter((goal)=>goal.id !== id);
    return newGoals;
    
  }
  )

}
  return <main> 
    <Header image={{src: goalsImg, alt:"A list of goals"}}>
    <h1>Your course goals</h1>
    </Header>
    <NewGoalForm onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals}  onDeleteGoal={handleDeleteGoal}/>
    
    </main>
}
