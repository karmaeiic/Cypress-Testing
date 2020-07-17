import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

    const eventHandler = (event) => {
        event.persist()
        validate(event)
        setMember({
            ...member, 
            [event.target.name]:event.target.type === "checkbox"? event.target.checked: event.target.value
        })
    }


    return(
        
        <form onSubmit={(event) => {
            event.preventDefault();
            setMember({name:'',email:'',password:'',})
            axios.post('https://reqres.in/api/users', member)
                .then( resp =>{let newUser = resp.data
                    setPost(newUser)
                })
                .catch( err => {console.log(err)})
            }
        }>
            <label htmlFor="Name">Name</label><br/>
            <input type="text" data-cy="name" placeholder="John Smith" name="name" value={member.name} onChange={eventHandler}></input><br/>
            {errors.name.length > 0 ? <p>**{errors.name}</p> : null}
            <label htmlFor="Email">Email</label><br/>
            <input type="email" data-cy="email" placeholder="email@example.com" name="email" value={member.email} onChange={eventHandler}></input><br/>
            {errors.email.length > 0 ? <p>**{errors.email}</p> : null}
            <label htmlFor="Password">Password</label><br/>
            <input type="password" data-cy="password" placeholder="password123" name="password" value={member.password} onChange={eventHandler}></input><br/>
            {errors.password.length > 0 ? <p>**{errors.password}</p>:null}
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button data-cy='submit' disabled={buttonDisabled}>SubmIt</button>
        </form>)
}

export default Form