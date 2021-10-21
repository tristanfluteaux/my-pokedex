import { useState } from "react";
import { NavLink } from "react-router-dom";

import './TrollEnter.css'

const TrollEnter = () => {
    const [result, setResult] = useState('')
    const [win, setWin] = useState(false)

    const handleWin = () => {
        if (result === 'grosq') {
            setWin(true)
        }

    }
    return (  
        <div className='main-entrance'>
            <div className='entrance-components'>
                <h3 style={{color: 'white', fontSize: '30px', textAlign: 'center'}}>Qui est le plus gros ?</h3>
                <input type='text' onChange={e => setResult(e.target.value)}/>
                <button onClick={handleWin}>submit</button>
            </div>
            <div>
                {win ?
                <NavLink to ='/trollreal' style={{color: 'white', fontSize: '50px'}} >Congralutation</NavLink>
                :
                null
                }
            </div>
        </div>
    );
}

export default TrollEnter;