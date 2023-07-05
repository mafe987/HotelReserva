import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HumanTest() {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState('');
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    generateOperation();
  }, []);

  function generateOperation() {
    const operators = ['+', '-', '*', '/'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomOperand1 = Math.floor(Math.random() * 10) + 1;
    const randomOperand2 = Math.floor(Math.random() * 10) + 1;

    setOperator(randomOperator);
    setOperand1(randomOperand1);
    setOperand2(randomOperand2);
    setAnswer('');
    setIsCorrect(null);
  }

  function checkAnswer() {
    const result = calculateResult();
    const userAnswer = parseInt(answer);

    if (isNaN(userAnswer)) {
      // La respuesta no es un número válido
      return;
    }

    if (userAnswer === result) {
      setIsCorrect(true);
    } else {
      if (answer !== '' && operand1 !== 0 && operand2 !== 0) {
        generateOperation();
      }
      setIsCorrect(false);
    }
  }

  function calculateResult() {
    let result = 0;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        break;
    }

    return result;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <p className="text-center">
            <strong> {operand1} {operator} {operand2} = ?</strong>
          </p>
          <div className="row">
            <div className="col">
              <input
                type="number"
                inputMode="numeric"
                className="form-control"
                placeholder="Resultado"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={checkAnswer}>
                Verificar
              </button>
            </div>
          </div>
          {isCorrect === true && (
            <div className="row mt-3">
              <div className="col">
                <span className="text-success">&#10003; Respuesta correcta</span>
              </div>
            </div>
          )}
          {isCorrect === false && (
            <div className="row mt-3">
              <div className="col">
                <span className="text-danger">&#10007; Respuesta incorrecta. Inténtalo de nuevo.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HumanTest;
