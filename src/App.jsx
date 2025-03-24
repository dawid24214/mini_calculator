import { useState } from 'react'


function App() {
    const [currentInput, setCurrentInput] = useState(''); //new code
    const [operator, setOperator] = useState('');
    const [operation, setOperation] = useState('');

    const [num1, setNume1] = useState(null);
    const [num2, setNume2] = useState(null);
    const [result, setResult] = useState(null);
    const [elements, setElements] = useState(null);


    const handleNumberClick = (value) => {
        setCurrentInput((prev) => + value);
    };
    const handleOperatorClick = (op) =>{
        if(currentInput === '') return;
        setElements((prev) => [...prev, parseFloat(currentInput), op]);
        setOperation((prev) => prev + '' + currentInput + '' + op);
    };



    const calculateResult = () => {
        if (currentInput !== '') {
            setElements((prev) => [...prev, parseFloat(currentInput)]);
        }
        let newElements = [...elements, parseFloat(currentInput)];
        const calculatePriority = (ops) => {
            for (let i = 0; i < newElements.length; i++){
                if (ops.includes(newElements[i])){
                    let result;
                    const num1 = newElements[i-1];
                    const num2 = newElements[i+1];

                    switch (newElements[i]){
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num2 !== 0 ? num1 / num2: 'Błąd';
                            break;
                        default:
                            continue;
                    }
                    newElements.splice(i - 1,3,result);
                    i --;
                }
            }
        };
        calculatePriority(['*', '/']);
        for (let  i = 0; i < newElements.length; i++){
            if (newElements[i] === '+' || newElements[i] === '-'){
                let result;
                const num1 = newElements[i - 1];
                const num2 = newElements [i + 1];

                switch (newElements[i]){
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    default:
                        continue;
                }
                newElements.splice(i - 1,3, result);
                i--;
            }
        }
        const finalResult = newElements[0];
        setOperation((prev) => prev + '' + currentInput + '=' +finalResult);
        setCurrentInput('');
        setElements([]);


    };
    const clearInput =  () =>{
        setCurrentInput('');
        setNume1(null);
        setNume2(null);
        setOperator(null);
        setResult(null);
        setOperation('');
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
            <h3>{operation}</h3>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>

            <br/>
            <button onClick={() => handleNumberClick(7)}>7</button>
            <button onClick={() => handleNumberClick(8)}>8</button>
            <button onClick={() => handleNumberClick(9)}>9</button>
            <button onClick={calculateResult}>=</button>
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
