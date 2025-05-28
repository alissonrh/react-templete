import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <button
          className="
            rounded-lg border border-transparent
            px-5 py-2 text-base font-medium
            font-inherit bg-[#1a1a1a] text-white
            cursor-pointer transition-colors duration-200
            hover:border-[#646cff]
            focus:outline-none focus-visible:outline-4 focus-visible:outline-blue-400
            dark:bg-[#1a1a1a] dark:text-white
            light:bg-[#f9f9f9] light:text-[#213547]
          "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
