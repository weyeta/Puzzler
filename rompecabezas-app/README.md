# Rompecabezas App

## Descripción
Rompecabezas App es una aplicación web diseñada para ayudar a los usuarios a armar rompecabezas de manera más eficiente. Permite a los usuarios cargar una imagen de referencia, contar las piezas del rompecabezas y recibir sugerencias sobre cómo encajar las piezas basándose en algoritmos de procesamiento de imágenes.

## Características
- **Carga de Imagen**: Permite al usuario subir una foto de la imagen final del rompecabezas.
- **Conteo de Piezas**: Los usuarios pueden ingresar la cantidad de piezas del rompecabezas para asegurarse de que todas estén presentes.
- **Detección de Bordes y Esquinas**: Utiliza algoritmos para identificar bordes y esquinas de las piezas.
- **Sugerencias de Coincidencia**: Muestra sugerencias sobre dónde pueden encajar las piezas, junto con un porcentaje de coincidencia que mejora con la precisión de la cámara.
- **Confirmación de Encaje**: Permite a los usuarios confirmar si una pieza encajó correctamente y descontar esa pieza del total.
- **Fotografía del Progreso**: Los usuarios pueden tomar fotos del rompecabezas en progreso para actualizar el estado de las piezas.

## Estructura del Proyecto
```
rompecabezas-app
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── ImageUploader.tsx
│   │   ├── PieceCounter.tsx
│   │   ├── EdgeDetector.tsx
│   │   ├── SuggestionPanel.tsx
│   │   ├── ConfirmationPanel.tsx
│   │   └── PuzzlePhoto.tsx
│   ├── utils
│   │   ├── imageProcessing.ts
│   │   └── pieceMatching.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación
1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd rompecabezas-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
1. Inicia la aplicación:
   ```
   npm start
   ```
2. Abre tu navegador y ve a `http://localhost:3000` para comenzar a usar la aplicación.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.