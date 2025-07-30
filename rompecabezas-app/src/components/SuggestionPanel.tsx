import React, { useState, useEffect } from 'react';

const SuggestionPanel = ({ pieces, detectedEdges }) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (pieces.length > 0 && detectedEdges.length > 0) {
            generateSuggestions();
        }
    }, [pieces, detectedEdges]);

    const generateSuggestions = () => {
        const newSuggestions = pieces.map(piece => {
            const matchPercentage = calculateMatchPercentage(piece);
            return {
                piece,
                matchPercentage,
                position: suggestPosition(piece)
            };
        });
        setSuggestions(newSuggestions);
    };

    const calculateMatchPercentage = (piece) => {
        // Placeholder for actual matching logic
        return Math.random() * 100; // Simulating a percentage
    };

    const suggestPosition = (piece) => {
        // Placeholder for actual position suggestion logic
        return { x: Math.random() * 100, y: Math.random() * 100 }; // Simulating a position
    };

    const handleConfirm = (piece) => {
        // Logic to confirm the piece placement
        console.log(`Piece ${piece.id} confirmed in position.`);
        // Update state or perform actions to discount the piece
    };

    return (
        <div className="suggestion-panel">
            <h2>Sugerencias de Coincidencia</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>
                        <div>
                            <span>Pieza: {suggestion.piece.id}</span>
                            <span> - Coincidencia: {suggestion.matchPercentage.toFixed(2)}%</span>
                            <button onClick={() => handleConfirm(suggestion.piece)}>Confirmar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SuggestionPanel;