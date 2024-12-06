import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["mangoes", "apples", "bananas", "oranges"];
  const fruits = [
    {
      name: "mango",
      price: "10",
    },
    {
      name: "apple",
      price: "25",
    },
    {
      name: "bananas",
      price: "5",
    },
    {
      name: "oranges",
      price: "15",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
            <Fruit name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
