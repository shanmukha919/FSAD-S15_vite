import axios from 'axios';
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        role: "USER"
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== user.confirmpassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:7070/user/register", user);
            alert(response.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <h2>Resgistration</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder="Name" onChange={handleChange} required /><br></br>
                <input type='email' name='email' placeholder="Email" onChange={handleChange} required /><br></br>
                <input type='text' name='phone' placeholder="Phone" onChange={handleChange} required /><br></br>
                <input type='password' name='password' placeholder="Password" onChange={handleChange} required /><br></br>
                <input type='password' name='confirmpassword' placeholder="Confirm Password" onChange={handleChange} required /><br></br>
                <select name='role' onChange={handleChange}>
                    <option value='USER'>USER</option>
                    <option value='ADMIN'>ADMIN</option>
                </select>
                <button type='submit'>Register</button>
            </form>

  

        </div>
    );
};

export default Register