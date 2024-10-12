import { useState } from 'react'
import './App.css'
import { login } from "./service";

function App() {
  const [count, setCount] = useState(0)

  login({
    name: 'admin',
    password: '123',
  }).then((res) => {
    console.log(res)
    // const { token } = res.data;
    // globalStore.setToken(token);
    
  });

  return (
    <>
      <div>
        
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
