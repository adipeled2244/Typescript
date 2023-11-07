 import { FC,   type PropsWithChildren } from "react"
//  interface CourseGoalProps {
//     title:string,
//     children:ReactNode
//  }

type  CourseGoalProps = PropsWithChildren<{
    id:number,
    title:string, 
    onDeleteGoal: (numberid:number)=>void,

}>
  const CourseGoal:FC<CourseGoalProps> = ({title,id,children,onDeleteGoal}) => {
  return (
    <article>
        
    <div>
        <h2>{ title}</h2>
        {children}
    </div>
    <button onClick={()=>onDeleteGoal(id)}>Delete</button>
    </article>
  )
}
export default CourseGoal;
