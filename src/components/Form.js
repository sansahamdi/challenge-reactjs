import React from 'react'

function Form(){

    function handleClick(){
        alert ('you message has been sended')
    }

    return(
        <section id="contact-section">
            <h2 className="text-important text-center">Contact Me</h2>
            <form>
                <label>FUll Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Message</label>
                <textarea cols="40" row="5"></textarea>
                <button onClick={handleClick}>Send</button>
            </form>
    </section>
    )
}

export default Form