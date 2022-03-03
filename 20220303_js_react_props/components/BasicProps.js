

function BasicProps(props) {

  console.log('props', props.content)

  return (
    <div className="red">{ props.content }</div>
  )
}

export default BasicProps;
