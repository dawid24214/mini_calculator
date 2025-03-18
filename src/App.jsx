import { useState } from 'react'


function App() {
    const [num1, setNume1] = useState('');
    const [num2, setNume2] = useState('');
    const [result, setResult] = useState('');
    const calculate = (operator) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResult('Wprowadz poprawne liczby!');
            return;
        }
        let res;
        switch (operator){
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                    res = n1 * n2;
                    break;
            case '/':
                res = n2 !== 0 ? n1 / n2: 'Nie można dzielić przez 0!';
                break;
            default:
                res = 'Błąd operacji ';
        }
        setResult(res)
    };
    return(
    <div className=''>
        <h2 className=''>Kalkulator</h2>
        <input
        type='number'
        placeholder='Pierwsza Liczba'
        value={num1}
        onChange={(e) => setNume1(e.target.value)}
        className=''
        />
        <input
        type='number'
        placeholder='Druga Liczba'
        value={num2}
        onChange={(e) => setNume2(e.target.value)}
        className=''
        />
        {result !== null && (
            <p className=''>Wynik : {result}</p>
        )}
        <div className=''>
            <button onClick={() => calculate('/')}>/</button>
            <button onClick={() => calculate('*')}>*</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('+')}>+</button>
            <br/>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <br/>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <br/>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            </div>
        
    </div>



    );
}

export default App
