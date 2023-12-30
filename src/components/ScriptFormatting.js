```javascript
import React, { useState } from 'react';
import axios from 'axios';

const ScriptFormatting = () => {
  const [script, setScript] = useState('');
  const [formattedScript, setFormattedScript] = useState('');

  const handleScriptChange = (event) => {
    setScript(event.target.value);
  };

  const handleFormatClick = async () => {
    try {
      const response = await axios.post('/api/scriptFormatting', { script });
      setFormattedScript(response.data.formattedScript);
    } catch (error) {
      console.error('Error formatting script:', error);
    }
  };

  return (
    <div className="ScriptFormatting">
      <h2>Script Formatting</h2>
      <textarea
        value={script}
        onChange={handleScriptChange}
        placeholder="Paste your script here..."
      />
      <button onClick={handleFormatClick}>Format Script</button>
      {formattedScript && (
        <div>
          <h3> Script:</h3>
          <pre>{formattedScript}</pre>
        </div>
      )}
    </div>
  );
};

export default ScriptFormatting;
```
</h3>Formatted</h2>