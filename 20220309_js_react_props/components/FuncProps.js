
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

      <FuncChildProps
        helloFunction={ props.helloFunction }
      />
  </div>)
}

export default FuncProps;