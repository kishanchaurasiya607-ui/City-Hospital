export default function Doctors() {
  return (
    <section id="doctors">
      {/* <h2>Our Doctors</h2> */}


      
        

        <div className="doctors-section">
          <img 
            src="/doctor1.jpg"
            alt="Doctor"
          />

          <h3>Dr. John Smith</h3>

          <p>Cardiologist</p>

        </div>

        <div className="doctors-section">
          <img
            src="/doctor2.jpg"
            alt="Doctor"
          />

          <h3>Dr. Sarah Lee</h3>

          <p>Neurologist</p>

        </div>

      
      

    </section>
  );
}