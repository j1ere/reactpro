import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["mangoes", "apples", "bananas", "oranges"];
  const fruits = [
    {
      name: "mango",
      price: "10",
      soldout: true,
    },
    {
      name: "apple",
      price: "25",
      soldout: false,
    },
    {
      name: "bananas",
      price: "5",
      soldout: true,
    },
    {
      name: "oranges",
      price: "15",
      soldout: true,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price} soldout={fruit.soldout}/>
        ))}
      </ul>
    </div>
  );
}
