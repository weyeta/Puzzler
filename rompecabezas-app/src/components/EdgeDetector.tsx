import React, { useEffect, useRef } from 'react';

const EdgeDetector: React.FC<{ image: HTMLImageElement | null }> = ({ image }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (image && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                detectEdges(context, canvas.width, canvas.height);
            }
        }
    }, [image]);

    const detectEdges = (context: CanvasRenderingContext2D, width: number, height: number) => {
        const imageData = context.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Simple edge detection algorithm (Sobel or similar can be implemented)
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = (y * width + x) * 4;
                const avgColor = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;

                // Example condition for edge detection
                if (avgColor < 128) {
                    data[idx] = 255; // Set to white
                    data[idx + 1] = 255;
                    data[idx + 2] = 255;
                } else {
                    data[idx] = 0; // Set to black
                    data[idx + 1] = 0;
                    data[idx + 2] = 0;
                }
            }
        }

        context.putImageData(imageData, 0, 0);
    };

    return <canvas ref={canvasRef} />;
};

export default EdgeDetector;