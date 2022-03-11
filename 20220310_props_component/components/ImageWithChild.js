

function ImageWithChild(props) {
  return (
    <div className="image-container">
      <div className="image">
        <img src={ props.src } />
      </div>
      <div className="image-label">
        { props.children }
      </div>
    </div>
  )
}

export default ImageWithChild;