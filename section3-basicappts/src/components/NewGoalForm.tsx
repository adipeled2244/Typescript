import  { useRef } from 'react'
import { type FormEvent } from 'react';

type NewGoalFormProps = {
    onAddGoal: (goal: {  title: string; summary: string }) => void;
  };

export const NewGoalForm = ({onAddGoal}:NewGoalFormProps) => {

    const goal=useRef<HTMLInputElement>(null);
    const summary=useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal({title:enteredGoal,summary:enteredSummary });

    }
  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="title">Your Goal</label>
            <input type="text" id="goal" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input type="text" id="summary" ref={summary} />
        </p>
        <p>
        <button type="submit">Add Goal</button>

        </p>

    </form>
  )
}

export default NewGoalForm;