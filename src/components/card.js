// App.js
import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <h1>My Card Component</h1>
      <Card
        title="Beautiful Landscape"
        description="A beautiful landscape with mountains and lakes."
        imageUrl="https://example.com/image.jpg"
      />
    </div>
  );
};

export default App;
