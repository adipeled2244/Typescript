import React, { useRef } from 'react';
import Input from './components/Input';
import Button from './components/Button'; 
import Contiainer from './components/Contiainer';
import Form,{type FormHandle} from './components/Form';

function App() {
  // const input=useRef<HTMLInputElement>(null);
  const customForm=useRef<FormHandle>(null);
  function handleSave(data:unknown){
    console.log(data);
    const extractedData= data as {name:string,age:string};
    console.log(extractedData.name);
    customForm.current?.clear();
  }
  return <main>
    <Form onSave={handleSave} ref={customForm}>
    <Input id="name" label="Name" type="text"   />
    <Input id="age" label="Your age" type="number"   />
      <Button  >Save</Button>
 
    </Form>
 

    {/* <Input id="name" label="your name" type="text" />
    <Input id="age" label="your age" type="number"  />
    <Button   type="submit" />
    <Button   href="https://google.com" /> */}
    {/* <Contiainer as={Button} >Click me</Contiainer> */}
  </main>
}

export default App;
