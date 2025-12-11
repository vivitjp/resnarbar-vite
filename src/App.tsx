import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <p>
          お品書き
        </p>
        <Link to="/mui" style={{ display: 'inline-block', marginTop: 16, color: '#1976d2', textDecoration: 'underline' }}>
          MUI Tooltip サンプル集
        </Link>
      </div>
    </>
  )
}

export default App
