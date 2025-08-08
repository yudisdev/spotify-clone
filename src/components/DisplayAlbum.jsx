import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets';
import { useParams } from 'react-router-dom';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    console.log(id);
    

  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={albumData.image} alt="" />
    </div>
    </>
  )
}

export default DisplayAlbum