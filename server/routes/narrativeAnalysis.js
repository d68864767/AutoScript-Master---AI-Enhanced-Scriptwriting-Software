const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Script = require('../models/Script');
const nlp = require('../utils/nlp');

// Route to analyze a script
router.post('/', async (req, res) => {
  try {
    const { script } = req.body;

    // Validate input
    if (!script) {
      return res.status(400).json({ error: 'Script is required' });
    }

    // Use NLP utility to analyze the script
    const analysisResult = await nlp.analyzeScript(script);

    // Save the script and analysis result to the database
    const newScript = new Script({
      content: script,
      analysis: analysisResult
    });

    const savedScript = await newScript.save();

    // Return the analysis result
    res.json(analysisResult);
  } catch (error) {
    console.error('Error analyzing script:', error);
    res.status(500).json({ error: 'An error occurred while analyzing the script' });
  }
});

module.exports = router;
