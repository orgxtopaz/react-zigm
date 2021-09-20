
import './App.css';
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import React from "react"; //IMPORT REACT
import { useForm } from "react-hook-form"; // IMPORT USEFORM SO WE CAN USE ITS ATTRIBUTE.
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from "yup"; // IMPORT YUP SO WE CAN USE IT FOR VALIDATION


//VALIDATION REQUIREMENTS.
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"),null])

});

//HERE IS THE VALIDATION PROCESS START.
function App() {
  //REGISTER FUNCTIONs AS A REFERENCE TO DETERMINE WHICH PROPERTY YOU WANT TO VALIDATE
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)

  });


  //HERE THE onSubmit will grab the object which has the data coming from the form (called by the handleSubmit).
  const onSubmit = data => console.log(data);

  //  // NO USE
  //  ///HERE ARE THE VARIABLES WHICH GET OR STORE THE DATA THAT IS INPUTED
   const [names,setName]=useState("");
   const [email,setEmail]=useState("");
   const [age,setAge]=useState("");
   const [password,setPassword]=useState("");
   const [confirmPassword,setConfirmPassword]=useState("");
    console.log(names+email+age+password+confirmPassword);

  return (

    <div className="App">
    <h1>Sign Up</h1>

   
  {/* /* "handleSubmit" will validate the inputs before calling "onSubmit" */ }
  <form onSubmit={handleSubmit(onSubmit)}>

  <label >First name:</label>
   {/* register the input into the hook by calling the "register" function */}
  <input type="text" onChange={(event =>{setName(event.target.value);})} {...register("name")}    name="name"/>
   {/* errors will return when field validation fails  */}
  <p>{errors.name&& "Invalid First Name"}</p>

  <label >Age:</label>
  <input type="text"  onChange={(event =>{setAge(event.target.value);})} {...register("age")} name="age" />
  <p>{errors.age && "Age is Invalid"}</p>


  <label >Email:</label>
  <input type="text" onChange={(event=>{setEmail(event.target.value);})} {...register("email")}   name="email" />
  <p>{errors.email&& "Email is Invalid"}</p>

  <label >Password:</label>
  <input type="text" onChange={(event=>{setPassword(event.target.value);})} {...register("password")}   name="password" />
  <p>{errors.password&& "Password is Invalid"}</p>

  <label >Confirm Password:</label>
  <input type="text" onChange={(event=>{setConfirmPassword(event.target.value);})} {...register("confirmPassword")} name="confirmPassword" />
  <p>{errors.confirmPassword&& "Password Doesn't Match!"}</p>

  <input type="submit"   value="Submit"/>
  </form> 


     
    </div>
    
  );
}

export default App;
