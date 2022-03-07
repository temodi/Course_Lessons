/* import deklaraciok */

/* modul valtozok ha van */
/* függvény deklarációk ha van (akkor is ha named export) */
function AnimalCard(props) {
  return (
    <div>
      Id: { props.data.id }<br />
      Név: { props.data.name }<br />
      Fajta: { props.data.species }<br />
      Age: { props.data.age }<br />
      {props.data.pedigree && <>Törzsköny: { props.data.pedigree ? 'Van' : 'Nincs' }</> }
      { /* props.data.pedigree && { 'Törzsköny': (props.data.pedigree ? 'Van' : 'Nincs') } */ }
      {props.data.other && <>Egyéb: { props.data.other }</> }<br />
      { /*  true && "valami1" }<br />
      { String(false && "valami2") }<br />
      { String(false ? "valami3" : '') */ }<br />
    </div>
  );
}

/* default export */
export default AnimalCard;