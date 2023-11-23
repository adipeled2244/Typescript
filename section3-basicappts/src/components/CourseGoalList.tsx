 import CourseGoal from './CourseGoal'
import { CourseGoal as CourseGoalType } from '../App'
import { InfoBox } from './InfoBox'
import { ReactNode } from 'react'
type CourseGoalListProps = {
goals:CourseGoalType[]
onDeleteGoal:(id:number)=>void
}

 const CourseGoalList = ({goals,onDeleteGoal}: CourseGoalListProps) => {

  if(goals.length === 0){
    return <InfoBox mode="hint" >No goals found. Maybe add one?</InfoBox>
  }

  let warningBox:ReactNode ;
  if(goals.length >=4){
    warningBox = <InfoBox mode="warning" severity='medium'>You collecting a lot of goals. </InfoBox>
  }

  return (

    <>
    {warningBox}
    <ul> 
    {
      goals.map((goal)=>{
        return <li key={goal.id}><CourseGoal id={goal.id} title={goal.title} onDeleteGoal={onDeleteGoal}>
        <p>{goal.description}</p>
        </CourseGoal ></li>
      })
    }</ul></>
  )
}


export default CourseGoalList;
