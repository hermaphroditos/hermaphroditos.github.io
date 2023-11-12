type HeadingProps = { title: string}


const Heading = ({title} : HeadingProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
export default Heading