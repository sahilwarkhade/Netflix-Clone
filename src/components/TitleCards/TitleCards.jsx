import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';
import netflix_spinner from '../../assets/netflix_spinner.gif'




const TitleCards = ({title,category}) => {
  const cardsref=useRef();
  const[apiData,setApiData]=useState([]);
  // const[loading,setLoading]=useState(false)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRjYzEwNDc2OWEyNDI0YTQzZThiZDVlYzJiYWEyZiIsInN1YiI6IjY2MmViMjM0N2Q1ZGI1MDEyNjNlMmZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RxCtNEjYe6t3ZJAMBiU5EdYN8wMW9NSnYjXT_JBIx3A'
    }
  };
  
  
  
  const handleWheel=(e)=>{
    e.preventDefault();
    cardsref.current.scrollLeft+=e.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsref.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='TitleCards'>
      <h2>{title?title:"Popilar on Netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {apiData.map((card,index)=>(
          <Link to={`/player/${card.id}`}>
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
