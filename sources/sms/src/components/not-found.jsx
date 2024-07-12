import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="ml-6 mt-6">
      <div style={{fontSize: 30, fontWeight: 500}}>Web not exist</div>
      <Link to={'/'} style={{color: 'blue', fontWeight: 'bold'}}>Home {'>>'}</Link>
    </div>
  )
}

export default NotFound
