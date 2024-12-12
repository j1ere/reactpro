export default function Message() {
    function buttonClick(){
        console.log("button clicked")
    }
  return <div>
    <button onClick={buttonClick}>click here to get a message</button>
  </div>;
}
