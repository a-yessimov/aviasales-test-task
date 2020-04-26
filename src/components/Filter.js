import React from 'react'
import '../styles/Filter.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../actions';

export const Filter = () => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    
    const {all, zero, one, two, three} = filter;

    function handleChange(e) {
        dispatch(setFilter(e.target.name))
    }

    return (
        <div className='filter block'>
            <p className='filter-title'>Колическо пересадок</p>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-1'
                    name="all"
                    checked={all}
                    onChange={handleChange}
                />
                <label htmlFor="filter-1">Все</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-2'
                    name="zero"
                    checked={zero}
                    onChange={handleChange}
                />
                <label htmlFor="filter-2">Без пересадок</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-3'
                    name="one"
                    checked={one}
                    onChange={handleChange}
                />
                <label htmlFor="filter-3">1 пересадка</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-4'
                    name="two"
                    checked={two}
                    onChange={handleChange}
                />
                <label htmlFor="filter-4">2 пересадки</label>
            </div>
            <div className='filter-item'>
                <input
                    type="checkbox"
                    className="checkbox"
                    id='filter-5'
                    name="three"
                    checked={three}
                    onChange={handleChange}
                />
                <label htmlFor="filter-5">3 пересадки</label>
            </div>
        </div>
    )
}