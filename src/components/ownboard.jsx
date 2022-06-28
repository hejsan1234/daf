import React, { useState, useEffect } from 'react'
import './ownboardstyles.css'

const OwnBoard = ({ socket }) => {

    const [colorSequence, setColorSequence] = useState(['', '', '', ''])
    const [result, setResult] = useState(['','','','']);


    const handleSubmit = () => {
        let tempArray = [...colorSequence]
        
        if (tempArray[3] !== '') {
            setResult(tempArray)
        }
    }

    useEffect(() => {
        if(result[0] !== '') {
            socket.emit("result", (result))
        }
    }, [result])
    

    const updateColors = (e) => {
        let tempArray = [...colorSequence]
        
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === '') {
                tempArray[i] = e.target.value
                break
            }
        }

        setColorSequence(tempArray)
    }

    const removeColor = () => {
        let tempArray = [...colorSequence]

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i] === '') {
                tempArray[i - 1] = ''
                break
            } else if (i === 3 && tempArray[i] !== '') {
                tempArray[i] = ''
            }
        }

        setColorSequence(tempArray)
    }

  return (
    <div className='board-wrapper'>
        <div className='board'>
            <div className='player'>Player one</div>
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
                        <li className='box' style={{backgroundColor: `${colorSequence[0]}`}}></li>
                        <li className='box' style={{backgroundColor: `${colorSequence[1]}`}}></li>
                        <li className='box' style={{backgroundColor: `${colorSequence[2]}`}}></li>
                        <li className='box' style={{backgroundColor: `${colorSequence[3]}`}}></li>
                    </ul>
                </div>
            </div>
            <ul className='guesses'>
                <button className='guess-box red' value={'red'} onClick={updateColors}>red</button>
                <button className='guess-box orange' value={'orange'} onClick={updateColors}>orange</button>
                <button className='guess-box yellow' value={'yellow'} onClick={updateColors}>yellow</button>
                <button className='guess-box blue' value={'blue'} onClick={updateColors}>blue</button>
                <button className='guess-box green' value={'green'} onClick={updateColors}>green</button>
                <button className='guess-box purple' value={'purple'} onClick={updateColors}>purple</button>
                <button className='guess-box black' onClick={removeColor}>Reverse</button>
                <button className='guess-box green' onClick={handleSubmit}>confirm</button>
            </ul>
        </div>
    </div>
  )
}

export default OwnBoard