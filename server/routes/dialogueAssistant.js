```javascript
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Script = require('../models/Script');
const nlp = require('../utils/nlp');

// Route to enhance dialogue
router.post('/', async (req, res) => {
  try {
    const { dialogueInput } = req.body;

    // Check if dialogueInput is provided
    if (!dialogueInput) {
      return res.status(400).json({ error: 'Dialogue input is required' });
    }

    // Use NLP utility to enhance dialogue
    const enhancedDialogue = await nlp.enhanceDialogue(dialogueInput);

    // Save the enhanced dialogue in the database
    const script = new Script({
      originalDialogue: dialogueInput,
      enhancedDialogue: enhancedDialogue
    });

    await script.save();

    // Return the enhanced dialogue
    res.json({ enhancedDialogue: enhancedDialogue });
  } catch (error) {
    console.error('Error enhancing dialogue:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```
