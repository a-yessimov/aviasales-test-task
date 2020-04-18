import React, { useState } from 'react'
import '../styles/Tabs.scss'

export const Tabs = () => {

    const [value, setValue] = useState('a')

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className='block tabs'>
            <input type='radio' value='a' checked={value === 'a'} onChange={handleChange} id='fast' />
            <label htmlFor='fast'>САМЫЙ БЕСТРЫЙ</label>
            <input type='radio' value='b' checked={value === 'b'} onChange={handleChange} id='cheep' />
            <label htmlFor='cheep'>САМЫЙ ДЕШЕВЫЙ</label>
        </div>
    )
}