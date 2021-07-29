import {Fragment, useState, useEffect} from 'react'
import AddBudget from './components/AddBudget'
import Home from './components/Home'
import Nav from './components/Nav'



function App() {


  const [add, setAdd] = useState({
    Concept: '',
    Amount: 0,
    Current_date: '',
    Type_of_operation: ''
  })

  const [budgets, setBudgets] = useState([])

  const [listDelete, setListDelete] = useState(false)

  useEffect(() => {
    const getBudget = () => {
        fetch('http://localhost:4000/api')
        .then(res => res.json())
        .then(res => setBudgets(res))
    }
    getBudget()
    setListDelete(false)
  }, [listDelete])
  

  return (
    <Fragment>
      <Nav />
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className=" col-xs-*">
            <AddBudget add={add} setAdd={setAdd} />
          </div>
        </div>
        <div>
          <Home add={add} setAdd={setAdd} budgets={budgets} setListDelete={setListDelete}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
