import React from 'react'
import {  Link } from "react-router-dom";


export default function Layout() {
  return (
    <div>
         <>
      <nav>
        <ul>
          <li>
            <Link to="/home">main</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/nofound">nofound</Link>
          </li>
        </ul>
      </nav>
    </>
    </div>
  )
}
