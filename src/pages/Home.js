import { Box } from '@mui/material'
import React,{useState} from 'react'
import Exercices from '../components/Exercices'
import HeroBanner from '../components/HeroBanner'
import SearchExercices from '../components/SearchExercices'

const Home = () => {
  const[exercises,setExercises]=useState([]);
  const[bodyPart,setBodyPart]=useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercices 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      setExercises={setExercises}
      
      />
      <Exercices 
      bodyPart={bodyPart}
      exercises={exercises}
      setExercises={setExercises}
      />

    </Box>
  )
}

export default Home
