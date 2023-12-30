```javascript
const mongoose = require('mongoose');

// Define the schema for a script
const ScriptSchema = new mongoose.Schema({
  storyIdea: {
    type: String,
    required: true
  },
  characterArcs: {
    type: Array,
    required: false
  },
  plotSuggestions: {
    type: Array,
    required: false
  },
  sceneOutlines: {
    type: Array,
    required: false
  },
  originalDialogue: {
    type: String,
    required: false
  },
  enhancedDialogue: {
    type: String,
    required: false
  },
  formattedScript: {
    type: String,
    required: false
  },
  narrativeAnalysis: {
    type: Object,
    required: false
  },
  collaborators: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the script model
module.exports = mongoose.model('Script', ScriptSchema);
```
