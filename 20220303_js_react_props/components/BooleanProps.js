import BooleanChildProps from "./BooleanChildProps";


function BooleanProps(props) {
  console.log('props.logikaiTrue=', props.logikaiTrue, typeof props.logikaiTrue);
  console.log('props.logikaiFalse=', props.logikaiFalse, typeof props.logikaiFalse);

  return (
    <>
      props.logikaiTrue : { String(props.logikaiTrue) }
      
      { props.logikaiTrue && <div>Ez true</div> }
      
      props.logikaiVar : { String(props.logikaiVar) }
      <br />
      Child ezt kapta: 
      <BooleanChildProps logikaiVar={ props.logikaiVar } />
    </>
  )
}

export default BooleanProps;