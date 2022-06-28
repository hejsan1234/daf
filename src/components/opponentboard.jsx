import React from 'react'
import './ownboardstyles.css'

const OpponentBoard = () => {
  return (
    <div className='board-wrapper'>
        <div className='board'>
            <div className='player'>Player two</div>
            <div className='result_board'>
                <div className='result_board-header'>
                    <h1>Result</h1>
                    <ul className='sequence'>
                        <li className='box'></li>
                        <li className='box'></li>
                        <li className='box'></li>
                        <li className='box'></li>
                    </ul>
                </div>
            </div>
            <div className='result_board'>
                <div className='result_board-header'>
                    <h1>Sequence guess:</h1>
                    <ul className='sequence'>
                        <li className='box'></li>
                        <li className='box'></li>
                        <li className='box'></li>
                        <li className='box'></li>
                    </ul>
                </div>
            </div>
            <ul className='guesses'>
                <li className='guess-box red'>red</li>
                <li className='guess-box orange'>orange</li>
                <li className='guess-box yellow'>yellow</li>
                <li className='guess-box blue'>blue</li>
                <li className='guess-box green'>green</li>
                <li className='guess-box purple'>purple</li>
                <li className='guess-box black'>black</li>
                <li className='guess-box green'>confirm</li>
            </ul>
        </div>
    </div>
  )
}

export default OpponentBoard