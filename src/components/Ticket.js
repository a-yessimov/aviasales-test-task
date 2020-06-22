import React from 'react'
import '../styles/Ticket.scss'
import testLogo from '../../public/images/testLogo.png'
import { Tickets } from './Tickets'

export const Ticket = ({ ticket }) => {
    return (
        <div className='block ticket'>
            <div className='row ticket-header'>
                <div className='col-8'>
                    <h3 className='price'>{`${ticket.price.toString().slice(0, -3)} ${ticket.price.toString().slice(-3)} P`}</h3>
                </div>
                <div className='col-4'>
                    <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} />
                </div>
            </div>
            {ticket.segments.map((segment, i) => {
                const stops = segment.stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' :
                    segment.stops.length === 1 ? '1 ПЕРЕСАДКА' :
                        `${segment.stops.length} ПЕРЕСАДКИ`;

                const duration = segment.duration/60/24 >= 1 ? `
                    ${Math.trunc(segment.duration/60/24)} д ${Math.trunc(segment.duration/60) - 24} ч ${segment.duration - Math.trunc(segment.duration/60) * 60} м  
                ` :
                `${Math.trunc(segment.duration/60)} ч ${segment.duration - Math.trunc(segment.duration/60) * 60} м`;

                const originDate = new Date(segment.date);
                const durationDate = new Date(originDate.getTime() + segment.duration * 60000)
                const originTimeStr = `${originDate.getHours() > 9 ? originDate.getHours() : '0' + originDate.getHours()}:${originDate.getMinutes() > 9 ? originDate.getMinutes() : '0' + originDate.getMinutes()}`;
                const durationTimeStr =  `${durationDate.getHours() > 9 ? durationDate.getHours() : '0' + durationDate.getHours()}:${durationDate.getMinutes() > 9 ? durationDate.getMinutes() : '0' + durationDate.getMinutes()}`;

                return (
                    <div className="row" key={i}>
                        <div className='col-4'>
                            <p className='ticket-text-title'>{`${segment.origin} - ${segment.destination}`}</p>
                            <p className='ticket-text'>{`${originTimeStr} - ${durationTimeStr}`}</p>
                        </div>
                        <div className='col-4'>
                            <p className='ticket-text-title'>В ПУТИ</p>
                            <p className='ticket-text'>{duration}</p>
                        </div>                        <div className='col-4'>
                            <p className='ticket-text-title'>{stops}</p>
                            <p className='ticket-text'>{segment.stops.join(', ')}</p>
                        </div >
                    </div>
                )
            })}
        </div>
    )
}