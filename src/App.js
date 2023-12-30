```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StoryDevelopment from './components/StoryDevelopment';
import DialogueAssistant from './components/DialogueAssistant';
import ScriptFormatting from './components/ScriptFormatting';
import NarrativeAnalysis from './components/NarrativeAnalysis';
import CollaborationTools from './components/CollaborationTools';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/storyDevelopment" component={StoryDevelopment} />
          <Route path="/dialogueAssistant" component={DialogueAssistant} />
          <Route path="/scriptFormatting" component={ScriptFormatting} />
          <Route path="/narrativeAnalysis" component={NarrativeAnalysis} />
          <Route path="/collaborationTools" component={CollaborationTools} />
          <Route path="/" component={StoryDevelopment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```
