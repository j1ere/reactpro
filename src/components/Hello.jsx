const name = "Africa has a population of millions, maybe";
function displayMessage() {
  return "million";
}
function Hello(props) {
  return (
    <div className="maukoro">
      <h1>
        Hello from Jeremiah! {name} {500 + 200} {displayMessage()}
      </h1>
      <h2>Africa</h2>
      <hr />

      <h2>
        {props.person.message}, {props.person.name} {props.person.seatNumbers}!
      </h2>
    </div>
  );
}

export default Hello;
