import React, { useEffect } from 'react'
import { Ticket } from './Ticket'
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setTickets } from '../actions'

export const Tickets = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);
    const tickets = useSelector(state => state.tickets.slice(0, 5));

    useEffect(() => {
        fetch(`https://front-test.beta.aviasales.ru/search`)
            .then(res => res.json())
            .then(data => dispatch(setUserId(data.searchId)))
    }, [])

    useEffect(() => {
        if (userId) {
            fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${userId}`)
                .then(res => res.json())
                .then(data => dispatch(setTickets(data.tickets)))
        }
    }, [userId])

    if(!tickets.length) {
        return (
            <div className='mt-2'>
                Loading...
            </div>
        )
    }


    return (
        <div className='mt-2'>
            <ul className='m-0 p-0'>
                {tickets.map((ticket, i) => (
                    <Ticket key={i} ticket={ticket} />
                ))}
            </ul>
        </div>
    )
}