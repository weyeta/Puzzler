import React, { useState } from 'react';

const PuzzlePhoto: React.FC = () => {
    const [photo, setPhoto] = useState<string | null>(null);
    const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(false);
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch(err => {
                console.error("Error accessing the camera: ", err);
            });
    };

    const takePhoto = () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0);
                const dataUrl = canvasRef.current.toDataURL('image/png');
                setPhoto(dataUrl);
                setIsTakingPhoto(false);
            }
        }
    };

    const handleTakePhotoClick = () => {
        setIsTakingPhoto(true);
        startCamera();
    };

    return (
        <div>
            <h2>Toma una foto del rompecabezas en progreso</h2>
            {isTakingPhoto ? (
                <div>
                    <video ref={videoRef} style={{ width: '100%' }} />
                    <button onClick={takePhoto}>Capturar Foto</button>
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>
            ) : (
                <button onClick={handleTakePhotoClick}>Iniciar Cámara</button>
            )}
            {photo && (
                <div>
                    <h3>Foto Capturada:</h3>
                    <img src={photo} alt="Puzzle in progress" style={{ width: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default PuzzlePhoto;