import React ,{useState} from 'react';
 export default function Login(){
    const[name,setName]=useState ("");
    const[id,setId]=useState("");
    const[password,setPassword]=useState("");
    const[submit,setSubmit]=useState(false);

    function handleName(e){
        setName(e.target.value);
    }
    
    function handleId(e){
        setId(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(name==='' || id===''||password===''){
          alert("Please enter all fields");
        }else{
            setSubmit(true);
            clearAll();
         
        }
    }

function clearAll(){
  
  setName("");
  setId("");
  setPassword("");
  
}
 function successMessage(){
    if(submit){
        return(
            <div>
                <p id="p">User {name} signed-up Successfully</p>
            </div>
        );
    }
 }

    return(
        <div>
            <div className="form">
            <form onSubmit={handleSubmit}>
            <div id="d1">
                <p>Login</p>
            </div>
            <label htmlFor="UserName">UserName</label>
            <input type = "text" id="name" name="UserName" value={name} onChange={handleName}/><br></br>


            <label htmlFor="EmailId">EmailId</label>
            <input type = "email" id="id" name="EmailId" value={id} onChange={handleId}/><br></br>
            
            <label htmlFor="Password">Password</label>
            <input type = "Password" id="psw" name="password" value={password} onChange={handlePassword}/><br></br>
            <button type="submit" id="submit">Login</button>
            </form>
            </div>
            <div id="success">
                {successMessage()}
            </div>

        </div>
    )
 }