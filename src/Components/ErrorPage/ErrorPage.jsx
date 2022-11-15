import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div>
        <div class="container">
            <h1>An error as occured.</h1>
            <h1> <span className="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
              <Link to="/" >Go back</Link>          
        </div>
    </div>
  )
}

export default ErrorPage