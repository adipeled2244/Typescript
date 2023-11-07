 import CourseGoal from './CourseGoal'
import { CourseGoal as CourseGoalType } from '../App'
type CourseGoalListProps = {
goals:CourseGoalType[]
onDeleteGoal:(id:number)=>void
}

 const CourseGoalList = ({goals,onDeleteGoal}: CourseGoalListProps) => {
  return (
    <ul> 
    {
      goals.map((goal)=>{
        return <li key={goal.id}><CourseGoal id={goal.id} title={goal.title} onDeleteGoal={onDeleteGoal}>
        <p>{goal.description}</p>
        </CourseGoal ></li>
      })
    }</ul>
  )
}


export default CourseGoalList;
