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
        type='text'
        placeholder='Pierwsza Liczba'
        value={num1}
        onChange={(e) => setNume1(e.target.value)}
        className=''
        />
        <input
        type='text'
        placeholder='Druga Liczba'
        value={num2}
        onChange={(e) => setNume2(e.target.value)}
        className=''
        />
        <div className=''>
            <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('*')}>*</button>
            <button onClick={() => calculate('/')}>/</button>
        </div>
        {result !== null && (
            <p className=''>Wynik : {result}</p>
        )}
    </div>



    );
}

export default App
