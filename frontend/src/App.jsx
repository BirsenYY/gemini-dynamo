import React, { useState } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';

function App() {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [keyConcepts, setKeyConcepts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleLinkChange = (event) => {
        setYoutubeLink(event.target.value);
    };

    const sendLink = async () => {
        setIsLoading(true);
        
        try {
            const response = await axios.post("http://localhost:8000/analyze_video", {
                youtube_link: youtubeLink,
            });
            const data = response.data;
            if (data.key_concepts && Array.isArray(data.key_concepts)){
                setKeyConcepts(data.key_concepts);
            } else {
                console.error("Data does not contain key concepts: ", data);
                setKeyConcepts([]);
            }
            
        } catch (error) {
            console.error('Error:', error);
            setKeyConcepts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const discardFlashcard = (index) => {
        setKeyConcepts(currentConcepts => currentConcepts.filter((_,i) => i !== index));
    }

    return (
        <div className="App">
            <h1>YouTube Link to Flashcards Generator</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <textarea
                    placeholder="Paste YouTube Link Here"
                    value={youtubeLink}
                    onChange={handleLinkChange}
                    style={{ width: '80%', height: '100px', marginBottom: '10px' }}
                />
                <button onClick={sendLink} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Generate Flashcards'}
                </button>
            </div>
            <div className="flashcardsContainer">
                {keyConcepts.map((concept, index) => (
                    <Flashcard
                        key={index}
                        term={concept.term}
                        definition={concept.definition}
                        onDiscard={() => discardFlashcard(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
