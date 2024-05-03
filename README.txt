
# YouTube Video Flashcard Generator

## Overview
This application generates flashcards from YouTube video transcripts, making it a useful tool in educational settings. It features a backend built with FastAPI and utilizes Google's Vertex AI and Gemini models to process video content. In fronend, the interactive web interface is build via React. This application integrates advanced generative AI techniques to extract scripts, summarize text, and identify key educational concepts.

## Features
- **Script Extraction with Langchain**: Utilizes Langchain modules for state-of-the-art script extraction from YouTube videos, ensuring high accuracy in text capture.
- **Generative AI for Concept Extraction**: Employs Google Gemini and Vertex AI API to analyze the text and extract key concepts, which are essential for creating educational flashcards.
- **Secure Integration with Service Accounts**: Ensures secure API calls and data processing through properly configured Google service accounts, maintaining high standards of data privacy and security.
- **Interactive Flashcard Generation**: Converts the identified concepts into interactive flashcards with the definitions, making studying more effective and engaging.

## Project Structure

project-root/
│
├── backend/             # FastAPI application
│   ├── main.py          # Entry point for the FastAPI server
│   ├── genai.py         # Core processing scripts for video analysis
│   └── requirements.txt # Python dependencies
│
├── frontend/            # React application
    ├── src/             # Source files for the frontend
    ├── public/
    ├── package.json     # NPM dependencies and scripts
    ├── README.md        # Frontend documentation


## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Setting Up the Backend (bash, MacOS)

1. **Navigate to the backend directory**:
cd backend
    
2. **Set Up a Python Virtual Environment**:
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install Python dependencies**:
pip install -r requirements.txt


4. **Run the FastAPI server**:
uvicorn main:app --reload

This command starts the FastAPI server with live reloading.

### Setting Up the Frontend (bash, MacOS)

1. **Navigate to the frontend directory**:
cd ../frontend


2. **Install Node dependencies**:
npm install


3. **Start the React development server**:
npm start

The server typically runs at `http://localhost:3000`.

## Usage

1. **Web Interface**: Access the interface at `http://localhost:3000`.
2. **Input YouTube Video URL**: Enter the URL of the lecture video to process.
3. **Generate Flashcards**: The backend extracts text, identifies key concepts, and presents them as flashcards on the frontend.

## Backend Detailed Workflow

- **YouTube Document Retrieval**: The `YoutubeProcessor` uses `YoutubeLoader` to fetch video scripts, which are then split into manageable documents.
- **Concept Extraction**: `GeminiProcessor` employs Google Vertex AI and Gemini models to extract key concepts, showcasing the application of generative AI in educational technology.
- **Error Handling and Logging**: Extensive logging to trace steps and handle errors gracefully.

##Acknowledgement
This project, "Gemini Dynamo," was developed with the invaluable guidance and structured mission tasks provided by Radical AI. I extend my heartfelt thanks to Rex, the AI coach, whose expert advice steered me through the complexities of the project. Additionally, I am grateful for the instructional videos created by the Radical AI team. These resources not only explained the nuances of the code but also provided detailed insights into the subtleties of the project, enhancing my understanding and execution of the tasks. Their support has been instrumental in the successful completion of this project.

