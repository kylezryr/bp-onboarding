import '../App.css';
import React from 'react';
import picture from '../assets/kyleramachandran.jpg'

const NameCard = () => {
    return (
        <div className='namecard'>
            <img src = {picture} alt = 'Kyle Ramachandran' width={200} height={200}></img>
            <div className='h1'>
                Kyle Ramachandran
            </div>
            <div className='subheading'>
                Web Developer
            </div>
            <div className='bodyText'>
            This is my bio! I am an EECS major at UC Berkeley, and I am interested in
            martial arts, running, and video games. I like watching MMA and basketball too!
            </div>
            <div className='email'>
                kyleramachandran@berkeley.edu
            </div>
        </div>
    )

}

export default NameCard;