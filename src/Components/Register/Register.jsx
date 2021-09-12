import './register.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <div className="navbar">
                <h1>Laburnum FOODS</h1>
                <Link to="/"><button className="registerHomeBtn">HOME</button></Link>
            </div>
        <div className="registerWrapper">
            <div className="logo">
                <h1>Laburnum FOODS</h1>
                <p>Taste every fruit of every tree in the garden at least once. It is an insult to creation not to experience it fully. Temperance is wickedness.</p>
            </div>
            <div className="hrline"></div>
            <div className="registerForm">
                <form>
                    <label htmlFor="name">Enter Your Name:</label>
                    <input id="name" type="text" placeholder="joseph" />
                    <label htmlFor="dob">Enter Your Date of Birth:</label>
                    <input id="dob" type="date" placeholder="DOB" />
                    <label htmlFor="gender">Enter Your Gender:</label>
                    <input id="gender" type="text" placeholder="Male" />
                    <label htmlFor="address">Enter Your Address</label>
                    <input id="address" type="text" placeholder="221B baker street" />
                    <label htmlFor="email">Enter Your Email Address:</label>
                    <input id="email" type="email" placeholder="joseph@gmail.com" />
                    <label htmlFor="phone">Enter Your Phone no.:</label>
                    <input id="phone" type="text" placeholder="1234567890" />
                    <button type="submit">Register</button>
                </form>
            </div>
            </div>
        </div>
    )
}
