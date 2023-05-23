import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import MarkAsSeenBtn from '../MarkAsSeenBtn/MarkAsSeenBtn';
import './moviecard.css';
import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <Link to={movie.id.toString()}>
        <ImageListItem component="div">
          <img
            src={imgUrl + movie.poster_path}
            srcSet={`${imgUrl}${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
            subtitle={
              <Rating
                name="half-rating-read"
                defaultValue={movie.vote_average}
                precision={0.5}
                max={10}
                readOnly
                emptyIcon={
                  <StarBorder style={{ opacity: 1 }} fontSize="inherit" />
                }
              />
            }
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                aria-label="mark movie as seen"
              >
                <MarkAsSeenBtn />
              </IconButton>
            }
          />
        </ImageListItem>
      </Link>
    </>
  );
};

export default MovieCard;
