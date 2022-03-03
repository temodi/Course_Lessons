
function Image(props) {
  return (
    <img src={ process.env.PUBLIC_URL + 'images/image.jpg'} alt={ props.alt } />
  )
}

export default Image;