export default function Fruit(props) {
  return (
    <div>
      {/* {props.name} and {props.price} */}
      {props.price > 10 ? <h1>{props.name} and {props.price}</h1> : null}
    </div>
  );
}
