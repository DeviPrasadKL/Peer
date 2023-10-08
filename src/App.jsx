import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './Components/Dashboard'
import Posts from './Components/Posts'
import Links from './Components/Links'
import Post from './Components/Post';

function App() {

  const key = "22444f78447824223cefc48062";

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/Peer" element={<Dashboard key={key}/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/links" element={<Links/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
