import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../models/ReduxState'
import { increment, decrement } from '../../redux/slices/testSlice/testSlice'
const Home = () => {
  const dispatch = useDispatch()
  const numberFromState = useSelector<ReduxState,number>(state => state.testSlice.number)

  const handleClickIncrement = (n : number) => {
    dispatch(increment(n))
  }
  const handleClickDecrement = (n : number) => {
    dispatch(decrement(n))
  }

  return (
    <div className='home'>
      <span>{numberFromState}</span>
      <div>
        <button onClick={() => handleClickIncrement(1)}>+1</button>
        <button onClick={() => handleClickDecrement(1)}>-1</button>
      </div>
    </div>
  )
}

export default Home