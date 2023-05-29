import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchDataByGenre } from '../store';
import styled from 'styled-components'

export default function SelectGenre({ genres, type }) {
    const dispatch=useDispatch()

    return (
    <select className='flex' onChange={e=>{
        dispatch(fetchDataByGenre({genre:e.target.value,type}))
    }}>
        {genres.map((genre)=>{
            return (<option value={genre.id} key={genre} >{genre.name}</option>);
        })}
    </select>);

}

const select = styled.select`
margin-left: 5rem;
cursor: pointer;
font-size: 1.4rem;
background-color: rgba(0, 0, 0, 0.4);
color: white;
`;