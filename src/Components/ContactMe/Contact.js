import React, { useState } from "react";

export default function Contact() {
  // Create state variables for the fields in the form
    function validateEmail(email) {
        const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    //message that the individual will send via email.
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email or full name
        if (inputType === "email") {
        setEmail(inputValue);
        } else if (inputType === "fullName") {
        setFullName(inputValue);
        }else if(inputType === "message"){
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if any of the other text fields are empty.
        if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }else if(!fullName ){
        setErrorMessage("Full Name is required");
        return;

    }else if(!message){
        setErrorMessage("Please enter a message. Context is important");
        return;

    }

    alert(`Thank you for contacting me ${fullName}. I'll respond to you directly within 2 business days.`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName("");
    setEmail("");
    };

    return (
        <div>
        <h2>Contact Me</h2>
        <p>If you'd like to work with me or are interested in learning more about my background for a specific role, please send me a note through this form. </p>
        <form className="form">
            <label for="fullName">Your Name:</label>
            <input
                value={fullName}
                name="fullName"
                onChange={handleInputChange}
                type="text"
                placeholder="Full Name"
            />
            <label for="email">Your Email:</label>
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            />
            <label for="message">Message:</label>
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your message goes here."
            />

            <button type="button" onClick={handleFormSubmit}>
            Submit
            </button>
        </form>
        {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
        </div>
    );
}
