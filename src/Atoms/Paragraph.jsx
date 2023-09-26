const Paragraph = ({ children, span }) => {
  return (
    <p className=" font-bold uppercase"> { children } <span className=" font-semibold text-white " > { span } </span>  </p>
  )
}

export default Paragraph