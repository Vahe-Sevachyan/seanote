import "./App.css";
import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

const App = () => {
  return (
    <div className="text-sky-700">
      <Navbar />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
