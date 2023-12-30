```javascript
import React, { useState } from 'react';
import axios from 'axios';

const StoryDevelopment = () => {
  const [storyIdea, setStoryIdea] = useState('');
  const [generatedStory, setGeneratedStory] = useState(null);

  const handleInputChange = (event) => {
    setStoryIdea(event.target.value);
  };

  const handleGenerateStory = async () => {
    try {
      const response = await axios.post('/api/storyDevelopment', { storyIdea });
      setGeneratedStory(response.data);
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  return (
    <div className="StoryDevelopment">
      <h1>Story Development</h1>
      <input
        type="text"
        value={storyIdea}
        onChange={handleInputChange}
        placeholder="Enter your story idea here"
      />
      <button onClick={handleGenerateStory}>Generate Story</button>
      {generatedStory && (
        <div>
          <h2>Generated Story</h2>
          <p>{generatedStory}</p>
        </div>
      )}
    </div>
  );
};

export default StoryDevelopment;
```
</h2></h1>