import { useState } from 'react'
import './Weather.css'

function Weather () {
    const [zip, setZip] = useState('94107')

    return (
        <div className="Weather">
            <h1>{zip}</h1>
            <form>
                <input 
                    placeHolder="Enter zip code"
                    value={zip}
                    onChange={ e => setZip(e.target.value) }
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Weather