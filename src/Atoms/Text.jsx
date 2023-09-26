const Text = ({ children, clase }) => {
  return (
    <h1 className = { clase }>
        { children }
    </h1>
  )
}

export default Text