
function ObjectProps(props) {

  return (
    <div>
      Name: { props.obj.name }<br />
      Age: { props.obj.age }<br />

      {props.objVar &&  <div>
        Rendelte termeke<br />
        Termek neve: { props.objVar?.item_name }<br />
        Termek brutto ar: { props.objVar?.price }
        {props.objVar?.net_price && <>Termek netto ar: { props.objVar.net_price }<br /></>}
      </div>}

    </div>
  )
}

export default ObjectProps;