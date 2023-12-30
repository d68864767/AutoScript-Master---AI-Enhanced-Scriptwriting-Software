```javascript
import React, { useState } from 'react';
import axios from 'axios';

const NarrativeAnalysis = () => {
  const [script, setScript] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleScriptChange = (event) => {
    setScript(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    try {
      const response = await axios.post('/api/narrativeAnalysis', { script });
      setAnalysisResult(response.data);
    } catch (error) {
      console.error('Error analyzing script:', error);
    }
  };

  return (
    <div className="NarrativeAnalysis">
      <h1>Narrative Analysis</h1>
      <textarea
        value={script}
        onChange={handleScriptChange}
        placeholder="Paste your script here for analysis..."
      />
      <button onClick={handleAnalyzeClick}>Analyze Script</button>
      {analysisResult && (
        <div>
          <h2>Analysis Result</h2>
          <p>{analysisResult}</p>
        </div>
      )}
    </div>
  );
};

export default NarrativeAnalysis;
```
</h2>