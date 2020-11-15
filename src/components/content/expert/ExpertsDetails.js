import React from 'react'
import expert1 from '../../../images/expert1.jpg'
import expert2 from '../../../images/expert2.jpg'
import expert3 from '../../../images/expert3.jpg'
import expert4 from '../../../images/expert4.jpg'

function ExpertsDetails() {
  return (
    <div>
      <div className='content'>
        <div className='box box1-expert'>
          <div className='imgBx'>
            <img src={expert1} alt='expert famous'/>
          </div>
          <div className='text'>
            <h3>Some Famous</h3>
          </div>
        </div>

        <div className='box box2-expert'>
          <div className='imgBx'>
            <img src={expert2} alt='expert famous' />
          </div>
          <div className='text'>
            <h3>Some Famous</h3>
          </div>
        </div>

        <div className='box box3-expert'>
          <div className='imgBx'>
            <img src={expert3} alt='expert famous' />
          </div>
          <div className='text'>
            <h3>Some Famous</h3>
          </div>
        </div>

        <div className='box box4-expert'>
          <div className='imgBx'>
            <img src={expert4} alt='expert famous' />
          </div>
          <div className='text'>
            <h3>Some Famous</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertsDetails
