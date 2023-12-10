import AccordianItem from './AccordianItem'

export default function Accordian({data}) {
 
  return (
      data.map((question) => 
        <AccordianItem key={question.id} num={question.id} title={question.title} text={question.text} />)
  )
}
