import React from 'react'
import '../styles/Ticket.scss'
import testLogo from '../../public/images/testLogo.png'

export const Ticket = () => {
    return (
        <div className='block ticket'>
            <div className='row ticket-header'>
                <div className='col-8'>
                    <h3 className='price'>13 400 P</h3>
                </div>
                <div className='col-4'>
                    <img src={testLogo} />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p className='ticket-text-title'>MOW - HKT</p>
                    <p className='ticket-text'>10:45 - 08:00</p>
                </div>
                <div className='col-4'>
                    <p className='ticket-text-title'>В ПУТИ</p>
                    <p className='ticket-text'>21ч 15м</p>
                </div>                        <div className='col-4'>
                    <p className='ticket-text-title'>2 ПЕРЕСАДКИ</p>
                    <p className='ticket-text'>NKG, JNB</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p className='ticket-text-title'>MOW - HKT</p>
                    <p className='ticket-text'>10:45 - 08:00</p>
                </div>
                <div className='col-4'>
                    <p className='ticket-text-title'>В ПУТИ</p>
                    <p className='ticket-text'>21ч 15м</p>
                </div>                        <div className='col-4'>
                    <p className='ticket-text-title'>1 ПЕРЕСАДКА</p>
                    <p className='ticket-text'>NKG</p>
                </div>
            </div>
        </div>
    )
}