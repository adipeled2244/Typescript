
import React,{type ComponentPropsWithoutRef,useRef, useImperativeHandle,forwardRef,FormEvent} from 'react'

type FormProps =  ComponentPropsWithoutRef<'form'>&{
    onSave:(value: unknown)=>void
}

export type FormHandle={
    clear:()=>void
}
  const Form = forwardRef <FormHandle,FormProps>(function Form ({onSave,children,...otherProps}:FormProps,ref)   {
    const form= useRef<HTMLFormElement>(null);

    // מוסיף פונקציה לרף שאפשר להשתמש בה מבחוץ
    useImperativeHandle(ref,()=>{
       return {
        clear(){
            console.log('clearrrrrrrrrrrrrrrrrrrrr');
            form.current?.reset();
        }
       }
    })

    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
 
        const formData = new FormData(event.currentTarget); // need name attribute in input
        const data = Object.fromEntries(formData);
         onSave(data);
 
    }
  return (
    <form {...otherProps}  onSubmit={handleSubmit} ref={form}  >
        {children}
    </form>
  )
})

export default Form;
