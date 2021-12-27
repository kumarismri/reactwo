import React,{useState} from 'react'

const ComponentOne = () => {

    const[state,setState]=useState(
        {
            name:"",
            department:"",
            rating:""
        }
    )

    const [secState,setSecstate]=useState([])

    const eventFunction=(event)=>{

        setState({...state,[event.target.name]:event.target.value})

    }

    const submitFun=(e)=>{
        e.preventDefault()
        setSecstate([...secState,{...state}])
    }
    return (
        <div className='parent'>
            <form onSubmit={submitFun}>
                
                <label name="name">Name:</label>
                <input className="btn" type="text" name="name" value={state.name} onChange={eventFunction}/><br/><br/>
                
                
                <label name="department">Department:</label>
                <input className="btn" type="text" name="department" value={state.department} onChange={eventFunction}/><br/><br/>
            
   
                <label name="rating">Rating:</label>
                <input className="btn" type="number" name="rating" value={state.rating} onChange={eventFunction}/><br/><br/>
                
           
                <input className="btnn" type="submit"/>               

            </form>

            <div className='card'>{        
                    secState.map((value)=>{
                        return(
                            <div className="innerCard">Name:{value.name}| Department:{value.department}|Rating:{value.rating}</div>
                        )                 
                    })
                }   
            </div>
            
        </div>
    )
}

export default ComponentOne
