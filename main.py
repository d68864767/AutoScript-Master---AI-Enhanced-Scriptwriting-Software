```python
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from routes import storyDevelopment, dialogueAssistant, scriptFormatting, narrativeAnalysis, collaborationTools

# Initialize the app
app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['autoscript-master']

# Use routes
app.register_blueprint(storyDevelopment.bp, url_prefix='/api/storyDevelopment')
app.register_blueprint(dialogueAssistant.bp, url_prefix='/api/dialogueAssistant')
app.register_blueprint(scriptFormatting.bp, url_prefix='/api/scriptFormatting')
app.register_blueprint(narrativeAnalysis.bp, url_prefix='/api/narrativeAnalysis')
app.register_blueprint(collaborationTools.bp, url_prefix='/api/collaborationTools')

# Define the port
port = 5000

# Start the server
if __name__ == '__main__':
    app.run(port=port, debug=True)
```
