import React from 'react';

interface ConfirmationPanelProps {
    pieceId: number;
    onConfirm: (pieceId: number) => void;
    onCancel: () => void;
}

const ConfirmationPanel: React.FC<ConfirmationPanelProps> = ({ pieceId, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-panel">
            <h2>Confirmar Encaje</h2>
            <p>¿La pieza {pieceId} encajó correctamente en la posición sugerida?</p>
            <button onClick={() => onConfirm(pieceId)}>Sí</button>
            <button onClick={onCancel}>No</button>
        </div>
    );
};

export default ConfirmationPanel;