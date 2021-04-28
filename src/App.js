
import Dashboard from './Components/Dashboard'
import Container from './Components/Container'
import ExpenseList from './Components/ExpenseList'
import Greet from './Components/Greet'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div >
       <Greet name=" Wee " gayname="khai"/>
       <Dashboard/>
       <ExpenseList/>
       <Container/>
       <Button href="/expense" > Next Page </Button>
    </div>
  );
}

export default App;
