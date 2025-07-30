import React, { useState } from 'react';

const PieceCounter: React.FC = () => {
    const [pieceCount, setPieceCount] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const count = parseInt(inputValue);
        if (!isNaN(count) && count > 0) {
            setPieceCount(count);
            setInputValue('');
        } else {
            alert('Por favor, ingresa un número válido de piezas.');
        }
    };

    return (
        <div>
            <h2>Contador de Piezas</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Cantidad de piezas"
                    min="1"
                />
                <button type="submit">Confirmar</button>
            </form>
            <p>Cantidad total de piezas: {pieceCount}</p>
        </div>
    );
};

export default PieceCounter;