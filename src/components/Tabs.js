import React from 'react'
import '../styles/Tabs.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../actions'

export const Tabs = () => {

    const sort = useSelector(state => state.sort)
    const dispatch = useDispatch()

    function handleChange(e) {
        console.log(e.target.value)
        dispatch(setSort(e.target.value))
    }

    return (
        <div className='block tabs'>
            <input type='radio' value='fast' checked={sort === 'fast'} onChange={handleChange} id='fast' />
            <label htmlFor='fast'>САМЫЙ БЫСТРЫЙ</label>
            <input type='radio' value='cheep' checked={sort === 'cheep'} onChange={handleChange} id='cheep' />
            <label htmlFor='cheep'>САМЫЙ ДЕШЕВЫЙ</label>
        </div>
    )
}