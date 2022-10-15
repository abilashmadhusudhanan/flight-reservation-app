import { useRef } from 'react';
import './Registration.css'

const Registration = () => {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailIdRef = useRef('');
    const passwordRef = useRef('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let firstName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let emailId = emailIdRef.current.value;
        let password = passwordRef.current.value;

        if(firstName.trim() === '') {
            console.log('Firstname should not be empty');
        }

        if(lastName.trim() === '') {
            console.log('Lastname should not be empty');
        }

        if(emailId.trim() === '') {
            console.log('E-Mail ID should not be empty');
        }

        if(password.trim() === '') {
            console.log('Password should not be empty');
        }
    }

    return (
        <div className="registration">
            <h1>Registration</h1>
            <form onSubmit={formSubmitHandler}>
                <table>
                    <tr>
                        <td><b>First Name</b>  : </td>
                        <td><input ref={firstNameRef} type='text' /></td>
                    </tr>
                    <tr>
                        <td><b>Last Name</b>   : </td>
                        <td><input ref={lastNameRef} type='text' /></td>
                    </tr>
                    <tr>
                        <td><b>E-Mail ID</b>   : </td>
                        <td><input ref={emailIdRef} type='email' /></td>
                    </tr>
                    <tr>
                        <td><b>Password</b>    : </td>
                        <td><input ref={passwordRef} type='password' /></td>
                    </tr>
                </table>
                <button type='submit' className='registerButton'>Register</button>
            </form>
        </div>
    )
}

export default Registration;