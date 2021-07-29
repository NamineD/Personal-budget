import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



function Nav() {

    const [budget, setBudget] = useState([])


    const [listDelete, setListDelete] = useState(false)

    useEffect(() => {
        const getBudget = () => {
            fetch('http://localhost:4000/api')
            .then(res => res.json())
            .then(res => setBudget(res))
        }
        getBudget()
        setListDelete(false)
    }, [listDelete])


    return (

        <Router>
          <nav className="navbar navbar-light bg-light">
            <div className="btn-group mx-5">
              <Link to="/" className="btn btn-dark ">
                Home
              </Link>
            </div>

              <Switch>
                <Route path="/" exact>
                  {/* <Home /> */}
                </Route>
              </Switch>
          </nav>
        </Router>
    )
}

export default Nav;
