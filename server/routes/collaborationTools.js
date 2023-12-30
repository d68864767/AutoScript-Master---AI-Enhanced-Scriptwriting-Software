```javascript
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Script = require('../models/Script');

// Route to initiate collaboration
router.post('/', async (req, res) => {
  const { script, collaborators } = req.body;

  try {
    // Find the script in the database
    const existingScript = await Script.findOne({ content: script });

    if (existingScript) {
      // Update the script with the new collaborators
      existingScript.collaborators = collaborators;
      await existingScript.save();

      res.json({ success: true, message: 'Collaboration initiated successfully!' });
    } else {
      // If the script doesn't exist, create a new one
      const newScript = new Script({
        content: script,
        collaborators: collaborators
      });

      await newScript.save();

      res.json({ success: true, message: 'Collaboration initiated successfully!' });
    }
  } catch (error) {
    console.error('There was an error with the collaboration request.', error);
    res.json({ success: false, message: 'There was an error initiating the collaboration.' });
  }
});

module.exports = router;
```
