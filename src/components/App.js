import React from 'react'
import '../styles/App.scss'
import logo from '../../public/images/logo.png'
import { Filter } from './Filter'
import { Tabs } from './Tabs'
import { Tickets } from './Tickets'

export const App = () => {
    return (
        <div className="container pt-5">
            <div className='text-center'>
                <img src={logo} />
            </div>
            <div className='row'>
                <div className='col-md-4 col-sm-12 mb-5'>
                    <Filter />
                </div>
                <div className='col-md-8 col-sm-12'>
                    <Tabs />
                    <Tickets />
                </div>
            </div>

        </div>
    )
}