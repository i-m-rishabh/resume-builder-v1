export default function Print({ isPrint, setPrint }) {
  // print function
  function handleClick() {
    setPrint(true);
    setTimeout(() => {
      window.print();
      setPrint(false);
    }, 1000);
  }
  return <button onClick={handleClick}>Print</button>;
}
