
function Contact(){
    return(<div className="contact">
<div id="contact-side">
<h2>contact Us For More Information</h2>
<h3>For Improvement on this Site</h3>
<address> Descent Street 204,</address>
<address>  Meek Road, Florida , 5669</address>
<address>Florida , 5669</address>
<h2> Follow us on social Media</h2>
<img src="facebook.png" alt="facebook"></img>
<img src="twitter.png" alt="facebook"></img>
<img src="instagram.png" alt="facebook"></img>
</div>

<div id="contact-second">
<fieldset id="fieldsetcontact">
    <legend>CONTACT US</legend>
    <form id="formcontact">
        <label for="fname">First Name:</label>
        <input type='text' id="fname"  name="fname" placeholder="First Name"/><br></br>
        <label for="fname">LastName:</label>
        <input type='text' id="lname"  name="lname" placeholder="Last Name"/><br></br>
        <label for="fname">Email:</label>
        <input type='text' id="email"  name="email" placeholder="Email"/><br></br>
        <label for="fname">Comments:</label><br></br>
        <textarea id="textarea" name="comments" type='text' rows='6' cols='60'>other comments</textarea><br></br>
        <input type='submit' value='submit'/>
    </form>
</fieldset>
</div>

        


    </div>)
}
export default Contact