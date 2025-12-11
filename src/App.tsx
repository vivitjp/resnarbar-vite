import { Link } from 'react-router-dom'
import './App.css'
import { Typography } from '@mui/material'

function App() {
  return (
    <>
      <div className="card">
        <Typography variant="h4" component="h1" gutterBottom>
          お品書き
        </Typography>
        <Link to="/mui" style={{ display: 'inline-block', marginTop: 16, color: '#1976d2', textDecoration: 'underline' }}>
          MUI Tooltip サンプル集
        </Link>
      </div>
    </>
  )
}

export default App
