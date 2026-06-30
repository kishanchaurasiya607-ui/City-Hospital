export default function Appointment() {
  return (
    <section id="appointment">

      <h2>Book Appointment</h2>

      <form>

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <button className="Submit">
          Submit
        </button>

      </form>

    </section>
  );
}