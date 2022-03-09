
import FuncChildProps from "./FuncChildProps";

function FuncProps(props) {
  console.log('props.helloFunction', props.helloFunction);
  console.log('props.helloFuncVar', props.helloFuncVar)

  const helloFunctionResult =  props.helloFunction();
  const helloFuncVarResult = props.helloFuncVar();

  return (<div>
      { props.helloFunction() }<br />
      { props.helloFuncVar() }<br />

      { helloFunctionResult }<br />
      { helloFuncVarResult }<br />

      { props.dateFormat() }

      <FuncChildProps
        helloFunction={ props.helloFunction }
      />

      { props.kiirFunc('World') }<br />

      { props.kiirFunc(props.kiirStr) }<br />
  </div>)
}

export default FuncProps;