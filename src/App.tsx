import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import PieceCounter from './components/PieceCounter';
import EdgeDetector from './components/EdgeDetector';
import SuggestionPanel from './components/SuggestionPanel';
import ConfirmationPanel from './components/ConfirmationPanel';
import PuzzlePhoto from './components/PuzzlePhoto';

const App = () => {
    const [image, setImage] = useState(null);
    const [pieceCount, setPieceCount] = useState(0);
    const [suggestions, setSuggestions] = useState([]);
    const [confirmedPieces, setConfirmedPieces] = useState([]);

const handleImageUpload = (uploadedImage: File) => {
    setImage(uploadedImage);
    // Lógica adicional aquí
};

    const handlePieceCountChange = (count) => {
        setPieceCount(count);
    };

    const handleSuggestionUpdate = (newSuggestions) => {
        setSuggestions(newSuggestions);
    };

    const handleConfirmation = (piece) => {
        setConfirmedPieces([...confirmedPieces, piece]);
        // Logic to update the available pieces can be added here
    };

    return (
        <div>
            <h1>Rompecabezas App</h1>
            <ImageUploader onImageUpload={handleImageUpload} />
            <PieceCounter onCountChange={handlePieceCountChange} />
            <EdgeDetector image={image} onSuggestionsUpdate={handleSuggestionUpdate} />
            <SuggestionPanel suggestions={suggestions} onConfirm={handleConfirmation} />
            <ConfirmationPanel confirmedPieces={confirmedPieces} />
            <PuzzlePhoto />
        </div>
    );
};

export default App;