import React from "react"
import Albums from "./components/Albums/main.albums"
import MainLayouts from "./components/Layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./components/Posts/main.posts"
import Home from "./components/Home/main.home"
import Errors from "./404"

//parent component
const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<Errors></Errors>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  )
}

export default App
