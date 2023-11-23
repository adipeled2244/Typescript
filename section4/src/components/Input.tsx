 
import {forwardRef, type ComponentPropsWithoutRef} from 'react'

type InputProps = {
    label: string
    id: string
    } & ComponentPropsWithoutRef<'input'> /// מאפשר פרופס של אלמנט אינפוט מכל סוגיו


  const Input = forwardRef<HTMLInputElement,InputProps>(function Input ({label,id,...props}: InputProps,ref) {
  return (
 <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...props} ref={ref} name={id} />
    </p>
  )
})


export default Input;
