import React, {useState} from 'react';

const Jokes = () =>{
    const [formData, setFormData] = useState({username: ""}, {password: ""});

    const handleInput = e => {
        // Using destructuring to access e.target.name and e.target.value
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };
    return(
        <form>
            <input type="text" name="username" placeholder="Introduce your name" value={formData.username} onChange={handleInput} />
            <input type="password" name="password" placeholder="introduce your password" value={formData.password} onChange={handleInput} />
            <input type="submit" value="Update" />    
        </form>
    )
};

export default Jokes;