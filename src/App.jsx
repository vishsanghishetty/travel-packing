import React from 'react'
import Accordian from '../components/Accordian'
import questions from '../src/questions'

export default function App() {
   return (
    <div>
       <Accordian data={questions} />
    </div>
  )
}
