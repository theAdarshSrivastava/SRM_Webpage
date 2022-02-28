import React from 'react'
import user from './user.png'
export default function Header() {
  return (
    <>
    <div className='header-comp'>
        <div className='comp1'>
                <a className="head" href='https://academia.srmist.edu.in/#CIRCULAR'><p className='academia'>Academia - Academic Web Services</p></a>
        </div>
        <div className='comp2'>
                <p className='name'>as2014</p>
                <div className='centr'>
                    <img className="img1" src={user}></img>
                </div>
        </div>
    </div>
    </>
  )
}
