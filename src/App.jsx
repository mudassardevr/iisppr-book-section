import "./App.css";

import FlipBook from "./components/flipbook/FlipBook";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">

        <div className="absolute inset-0">

        
        {/* CYAN BALL */}
        <div className="absolute top-20 left-40 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30" />

        {/* YELLOW BALL */}
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30" />
        </div>
        
        <FlipBook className='relative z-10' />
        
      </div>
    </>
  );
}

export default App;
