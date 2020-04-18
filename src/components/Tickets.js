import React from 'react'
import { Ticket } from './Ticket'

export const Tickets = () => {
    return (
        <div className='mt-2'>
            <ul className='m-0 p-0'>
                <Ticket />
                <Ticket />
                <Ticket />
            </ul>
        </div>
    )
}