const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const storyDevelopmentRoutes = require('./server/routes/storyDevelopment');
const dialogueAssistantRoutes = require('./server/routes/dialogueAssistant');
const scriptFormattingRoutes = require('./server/routes/scriptFormatting');
const narrativeAnalysisRoutes = require('./server/routes/narrativeAnalysis');
const collaborationToolsRoutes = require('./server/routes/collaborationTools');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/storyDevelopment', storyDevelopmentRoutes);
app.use('/api/dialogueAssistant', dialogueAssistantRoutes);
app.use('/api/scriptFormatting', scriptFormattingRoutes);
app.use('/api/narrativeAnalysis', narrativeAnalysisRoutes);
app.use('/api/collaborationTools', collaborationToolsRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/autoscript-master', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Define the port
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
