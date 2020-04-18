import React from 'react'
import '../styles/Filter.scss'

export const Filter = () => {
    return (
        <div className='filter block'>
            <p className='filter-title'>Колическо пересадок</p>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-1'
                />
                <label htmlFor="filter-1">Все</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-2'
                />
                <label htmlFor="filter-2">Без пересадок</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-3'
                />
                <label htmlFor="filter-3">1 пересадка</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-4'
                />
                <label htmlFor="filter-4">2 пересадки</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-5'
                />
                <label htmlFor="filter-5">3 пересадки</label>
            </div>
        </div>
    )
}