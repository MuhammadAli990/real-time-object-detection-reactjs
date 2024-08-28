# Real-Time Object Detection with TensorFlow COCO-SSD

Welcome to the Real-Time Object Detection project! This React.js application leverages TensorFlow.js and the COCO-SSD model to detect objects in real time using a webcam.

## Features

- **Real-Time Object Detection**: Leverages TensorFlow.js in conjunction with the COCO-SSD model to perform object detection, drawing bounding boxes around detected objects, annotating them with their respective names and displaying prediction confidence scores.
- **Webcam Integration**: Captures live video from your webcam for real-time processing.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **TensorFlow.js**: A library to run machine learning models in the browser.
- **COCO-SSD**: A pre-trained model for object detection.
- **React Webcam**: A React component to access webcam feed.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/muhammadali990/real-time-object-detection-reactjs.git
   cd real-time-object-detection-reactjs
   ```

2. **Install Dependencies**:

   Install the necessary dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:

   Run the development server to see the application in action:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser and go to `http://localhost:3000` (or the port specified in your terminal).

## Usage

1. **Access Webcam**: Allow the browser to access your webcam when prompted.
2. **Object Detection**: The application will display a live feed from your webcam and highlight detected objects in real time.

## Dependencies

- **react-webcam**: Provides a webcam component for React.
- **@tensorflow/tfjs**: Library to integrate TensorFlow models with JavaScript.
- **@tensorflow-models/coco-ssd**: COCO-SSD model for object detection.

Thank you for checking out this project. Happy coding!
