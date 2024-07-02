// import React from 'react';
// import TodoList from './components/todolist';
// import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from './assets/background-3.jpg';

// function App() {
//   return (
//     <div 
//       className="App" 
//       style={{ 
//         backgroundImage: `url(${backgroundImage})`, 
//         backgroundSize: '500px', 
//         backgroundRepeat: 'repeat',
//         minHeight: '100vh'
//       }}
//     >
//       <div className="background-overlay">
//       <Header />
//       <TodoList />

//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import TodoList from './components/todolist';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/background-3.jpg';

function App() {
  return (
    <div 
      className="App" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: '500px', 
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(50, 0, 50, 0.7)',
          zIndex: 1
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
