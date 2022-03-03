

function NumericProps(props) {
  
  const numberSqr = props.number * props.number;

  return (
    <>
      <div>Megkapott 'number' ertek: { props.number } </div>
      <div>Megkapott 'numberVar' ertek: { props.numberVar } </div>
      <div>Megkapott 'numberFuncReturn' ertek: { props.numberFuncReturn } </div>
      <div>{ numberSqr } vagy { props.number * props.number }</div>
    </>
  )
}

export default NumericProps;