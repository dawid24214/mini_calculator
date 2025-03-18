import { useState } from 'react'


function App() {
    const [currentInput, setCurrentInput] = useState(''); //new code
    const [operator, setOperator] = useState(null);

    const [num1, setNume1] = useState(null);
    const [num2, setNume2] = useState(null);
    const [result, setResult] = useState(null);


    const handleNumberClick = (value) => {
        setCurrentInput((prev) => + value);
    };
    const handleOperatorClick = (op) =>{
        if (currentInput === '') return;
        setNume1(parseFloat(currentInput));
        setOperator(op);
        setCurrentInput('');
    };



    const calculateResult = () => {

        if (num1 === null || currentInput === '') return;
        const n2 = parseFloat(currentInput);

        let res;
        switch (operator){
            case '+':
                res = num1 + n2;
                break;
            case '-':
                res = num1 - n2;
                break;
            case '*':
                    res = num1 * n2;
                    break;
            case '/':
                res = n2 !== 0 ? num1 / n2: 'Nie można dzielić przez 0!';
                break;
            default:
                res = 'Błąd operacji ';
        }
        setResult(res);
        setCurrentInput('');
        setNume1(null);
        setNume2(null);
        setOperator(null);

    };
    const clearInput =  () =>{
        setCurrentInput('');
        setNume1(null);
        setNume2(null);
        setOperator(null);
        setResult(null);
    };
    return(
    <div className=''>
        <h2 className=''>Kalkulator</h2>
        <input type='number' value={currentInput} readOnly placeholder='Wprowadz liczbe'/>

        {/*<input*/}
        {/*type='number'*/}
        {/*placeholder='Pierwsza Liczba'*/}
        {/*value={num1}*/}
        {/*onChange={(e) => setNume1(e.target.value)}*/}
        {/*className=''*/}
        {/*/>*/}


        {/*<input*/}
        {/*type='number'*/}
        {/*placeholder='Druga Liczba'*/}
        {/*value={num2}*/}
        {/*onChange={(e) => setNume2(e.target.value)}*/}
        {/*className=''*/}
        {/*/>*/}
        <div className=''>
            <button onClick={() => handleNumberClick('/')}>/</button>
            <button onClick={() => handleNumberClick('*')}>*</button>
            <button onClick={() => handleNumberClick('-')}>-</button>
            <button onClick={() => handleNumberClick('+')}>+</button>
            <br/>
            <button onClick={() => handleNumberClick(7)}>7</button>
            <button onClick={() => handleNumberClick(8)}>8</button>
            <button onClick={() => handleNumberClick(9)}>9</button>
            <br/>
            <button onClick={() => handleNumberClick(4)}>4</button>
            <button onClick={() => handleNumberClick(5)}>5</button>
            <button onClick={() => handleNumberClick(6)}>6</button>
            <br/>
            <button onClick={() => handleNumberClick(1)}>1</button>
            <button onClick={() => handleNumberClick(2)}>2</button>
            <button onClick={() => handleNumberClick(3)}>3</button>
            </div>

    </div>



    );
}

export default App
