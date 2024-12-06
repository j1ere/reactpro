export default function Fruit(props) {
  return (
    <div>
      {/* {props.name} and {props.price} */}
      <h1>
        {props.name} {props.price} {props.soldout}
        {props.soldout ? "sold out" : null}
      </h1>
    </div>
  );
}
