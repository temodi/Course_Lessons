

function Image(props) {
  return (
    <div className="image-container">
      <div className="image">
        <img src={ props.src } />
      </div>
      <div className="image-label">
        { props.label }
      </div>
    </div>
  )
}

export default Image;