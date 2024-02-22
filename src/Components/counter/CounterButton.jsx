import {PropTypes} from 'prop-types'
import { useState } from 'react'

export default function CounterButton({by,incrementMethod,decrementMethod}) {



    // const [firstElt, secondElt] = array
       const [count,setCount] = useState(0)
    
       console.log(by)
    
    
    
      /*  function incrementCounterFunction() {
    
            setCount(count+by)
            incrementMethod(by)
           // console.log(state[0])
           // console.log(state[1])
            console.log(count)
        } */
    
        function decrementCounterFunction() {
            setCount(count-by)
            decrementMethod(by)
        }
    
    
    
        return(
            <div className="Couter">
                <div>
                <button 
                className="counterButton"
                 onClick={()=>incrementMethod(by)}
                >
                       +{by}
                </button>
                <button className="counterButton" onClick={decrementCounterFunction}>
                       -{by}
                </button>
                </div>
                
            </div>
        )
    }
    
    CounterButton.propType = {
        by: PropTypes.number
    }
    