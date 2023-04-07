import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'car Insurance', amount: 300.69, date: new Date(2021, 3, 26) },
    { id: 'e2', title: 'New TV', amount: 305.59, date: new Date(2022, 4, 27) },
    { id: 'e3', title: 'Mobile', amount: 310.10, date: new Date(2023, 5, 28) },
    { id: 'e4', title: 'Laptop', amount: 315.15, date: new Date(2024, 6, 29) }
  ];


// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2',{},'Lets get Started'),
//   React.createElement(Expenses,{item:expenses})

// );


  return (
    <div>
      <h1>Lets get Started</h1>
      <Expenses item={expenses}/>
    </div>
  );
 }

export default App;
