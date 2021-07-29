import React from 'react'
import swal from 'sweetalert';

function Home({add, setAdd, budgets, setListDelete}){

    

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:4000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListDelete(true)
    }

    let{Concept, Amount, Current_date, Type_of_operation} = add

    const handleEditEntry = id => {
        

        Amount = parseInt(Amount, 10);

        if(Type_of_operation == [0]){

             // Consult
            const requestInit = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(add)
            }
            fetch('http://localhost:4000/api/' + id, requestInit)
                .then(res => res.text())
                .then(res => console.log(res))

            // resetting state
            setAdd({
                Concept: '',
                Amount: 0,
                Current_date: '',
                Type_of_operation: ''
            }) 
    
            setListDelete(true)

        
        } else{
            swal("It is not possible to modify the type of operation")
            return undefined
        } 

        // data validation
        if(Concept === '' || Amount <= 0 || Current_date === ''){
            swal("All fields are required", "error")
            return
        }   

        
    }   

    const handleEditEgress = id => {
        

        Amount = parseInt(Amount, 10);

        if(Type_of_operation == [1]){

             // Consult
            const requestInit = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(add)
            }
            fetch('http://localhost:4000/api/' + id, requestInit)
                .then(res => res.text())
                .then(res => console.log(res))

            // resetting state
            setAdd({
                Concept: '',
                Amount: 0,
                Current_date: '',
                Type_of_operation: ''
            }) 
    
            setListDelete(true)

        
        } else{
            swal("It is not possible to modify the type of operation")
            return undefined
        } 

        // data validation
        if(Concept === '' || Amount <= 0 || Current_date === ''){
            swal("All fields are required", "error")
            return
        }   

        
    }   


    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="table-responsive-sm col-md-6 mt-5">
                    <h2 style={{textAlign: 'center'}}>Entry</h2>
                    <table className="table table-sm align-middle">
                        <thead>
                            <tr>
                                    <th>ID</th>
                                    <th>Concept</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {budgets.slice(-10).map(budget => (
                                    <>
                                    {budget.Type_of_operation == [0] &&
                                        <tr key={budget.id}>
                                                <td>{budget.id}</td>
                                                <td>{budget.Concept}</td>
                                                <td>{budget.Amount}</td>
                                                <td>{budget.Current_date.slice(0, 10)}</td>
                                                <td>
                                                    <div className="mb-3">
                                                        <button onClick={() => handleEditEntry(budget.id)} className="btn btn-info"><i class="material-icons">create</i></button> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <button onClick={() => handleDelete(budget.id)} className="btn btn-danger"><i class="material-icons">delete</i></button>
                                                    </div>
                                                </td>
                                        </tr>
                                    }
                                    </>
                                    ))
                                }
                        </tbody>
                    
                    </table>
                </div>
                <div className="table-responsive-sm col-md-6 mt-5">
                    <h2 style={{textAlign: 'center'}}>Egress</h2>
                    <table className="table table-sm align-middle">
                        <thead>
                            <tr>
                                    <th>ID</th>
                                    <th>Concept</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {budgets.slice(-10).map(budget => (
                                    <>
                                    {budget.Type_of_operation == [1] &&
                                        <tr key={budget.id}>
                                                <td>{budget.id}</td>
                                                <td>{budget.Concept}</td>
                                                <td>{budget.Amount}</td>
                                                <td>{budget.Current_date.slice(0, 10)}</td>
                                                <td>
                                                    <div className="mb-3">
                                                        <button onClick={() => handleEditEgress(budget.id)} className="btn btn-info"><i class="material-icons">create</i></button> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <button onClick={() => handleDelete(budget.id)} className="btn btn-danger"><i class="material-icons">delete</i></button>
                                                    </div>
                                                </td>
                                        </tr>
                                    }
                                    </>
                                    ))
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;