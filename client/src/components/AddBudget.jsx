import {useState} from 'react'
import swal from 'sweetalert';

function AddBudget({add, setAdd}) {

    const [options, setOptions] = useState(["Entry", "Egress"])

    const handleChange = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value,
        })
    }

    let{Concept, Amount, Current_date, Type_of_operation} = add

    

    const handleSubmit = () => {

        Amount = parseInt(Amount, 10);

        // data validation
        if(Concept === '' || Amount <= 0 || Current_date === '' || Type_of_operation === ''){
            swal("All fields are required");
            return
        }

        //consultation
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(add)
        }
        fetch('http://localhost:4000/api', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        // resetting state
        setAdd({
            Concept: '',
            Amount: 0,
            Current_date: '',
            Type_of_operation: ''
        })  

        
    }
    

    return (
        <div className="container-fluid col-md col-lg mt-5 px-5">
            <form className="card card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-group mb-3">
                    <label htmlFor="concept" className="form-control">Concept</label>
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            className="form-control"
                            name="Concept"
                            value={Concept}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="amount" className="form-control">Amount</label>
                        <input 
                            onChange={handleChange} 
                            type="number" 
                            className="form-control"
                            name="Amount"
                            value={Amount}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="form-control">Date</label>
                        <input 
                            onChange={handleChange}
                            type="date" 
                            className="form-control"
                            placeholder="Date"
                            name="Current_date"
                            value={Current_date}
                        />
                    </div>
                    <div className="form-group mb-3">
                            <select 
                                className="form-control" 
                                name="Type_of_operation" 
                                placeholder="Type of Operation" 
                                onChange={handleChange}
                                value={Type_of_operation}>
                                    <option value={-1}> Select the type of operation: </option>
                                    {
                                        options.map((item, i)=>(
                                            <option
                                                key={i.toString()}
                                                value={i.toString()}
                                            >{item.toString()}</option>
                                        ))
                                    }
                                    {/* <option >{options[0].toString()}</option>
                                    <option >{options[1].toString()}</option> */}

                            </select>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary mb-3"
                >Submit</button>
            </form>
        </div>
    )
}

export default AddBudget;
