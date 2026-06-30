export default function Navbar() {
  return (
    <nav  className="navbar">
     <div id="navbar" >
      <img id="logo" src="https://i.pinimg.com/736x/c5/0f/27/c50f27d7b63c7bdcc2387b5905d63a60.jpg" alt="loading" />
        <h1>City Hospital</h1>

     </div>
      <ul>
        <div id="top"><li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#appointment">Appointment</a></li></div>
        <li><a href="#contact" ><button className="Talk">Let's Talk</button></a></li>
      </ul>
    </nav>

  );
}