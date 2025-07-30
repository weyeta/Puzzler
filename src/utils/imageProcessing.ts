import cv2
import numpy as np

export const detectEdgesAndCorners = (image: HTMLImageElement): { edges: any; corners: any } => {
    const src = cv2.imread(image.src);
    const gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY);
    const edges = cv2.Canny(gray, 100, 200);
    const corners = cv2.goodFeaturesToTrack(gray, 25, 0.01, 10);
    
    return { edges, corners };
};

export const preprocessImage = (image: HTMLImageElement): HTMLImageElement => {
    const src = cv2.imread(image.src);
    const resized = cv2.resize(src, new cv2.Size(800, 600));
    return resized;
};

export const calculatePieceMatchPercentage = (piece: HTMLImageElement, reference: HTMLImageElement): number => {
    const pieceData = cv2.imread(piece.src);
    const referenceData = cv2.imread(reference.src);
    
    // Implement a method to compare the piece with the reference image
    const matchResult = cv2.matchTemplate(referenceData, pieceData, cv2.TM_CCOEFF_NORMED);
    const maxVal = cv2.minMaxLoc(matchResult).maxVal;
    
    return maxVal * 100; // Return percentage
};