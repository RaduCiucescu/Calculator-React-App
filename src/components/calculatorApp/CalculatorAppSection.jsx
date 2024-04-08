import './CalculatorAppSection.css'
import { useState } from 'react';
import classNames from 'classnames';


const CalculatorAppSection = () =>{

    
    let [number, setNumber] = useState(0);
    let [isRed, setIsRed] = useState(false);

    const plusOne = () =>{
        setNumber( number + 1);
     
    }
    const minusOne = () =>{
        setNumber( number - 1);
    }
    const square = () =>{
        setNumber( number * 2);
    }
    const divided = () =>{
        setNumber( number / 2);
    }

    const reset = () =>{
        setNumber( number * 0);
    }

    const switchColor = () => {
        if(isRed === true) {
          setIsRed(false);
        } else {
          setIsRed(true);
        }
      };
   
    //   const x = isRed === true ? 'text-red' : null;
    return(
        <div className="section-container">
            <div className='calculator-container'>
                <h1 className='title'>Calculator</h1>
                <p style={{fontSize: '48px', marginBottom: '28px'}} className= {isRed === true ? 'text-red' : null}>{number}</p>
                <div className='buttons-section'>
                    <button onClick={plusOne} className='buttons'>+</button>
                    <button onClick={minusOne} className='buttons'>-</button>
                    <button onClick={square} className='buttons'>x</button>
                    <button onClick={divided} className='buttons'>/</button>
                    <button onClick={reset} className='buttons'>RESET</button>
                    <button onClick={switchColor} className='buttons'>Switch Color</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorAppSection;