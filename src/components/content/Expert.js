import React from 'react'
import ExpertList from './expert/ExpertList'


function Expert() {
  return (
    <section className='expert' id='expert'>
      <div className='title'>
        <h2 className='title-text'>Our Kitchen <span>E</span>xpert</h2>
        <p>60% of businesses are not having a content marketing plan/strategy.</p>      
      </div>
      <ExpertList />
    </section>
  )
}

export default Expert
