```javascript
const express = require('express');
const router = express.Router();
const Script = require('../models/Script');

// Import the script formatting utility function
const formatScript = require('../utils/formatScript');

// POST request to format a script
router.post('/', async (req, res) => {
  try {
    const { script } = req.body;

    // Validate input
    if (!script) {
      return res.status(400).json({ error: 'Script is required' });
    }

    // Format the script
    const formattedScript = formatScript(script);

    // Save the formatted script in the database
    const newScript = new Script({ content: formattedScript });
    await newScript.save();

    // Send the formatted script back to the client
    res.json({ formattedScript });
  } catch (error) {
    console.error('Error formatting script:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```
