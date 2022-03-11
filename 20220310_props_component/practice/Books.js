

function Books({ bookList, decorationComponent, saleImage }) {
  return <ul>
   { 
    bookList.map((bookObj, index) => {
      return (
        <li key={ `bt_${index}` }>{ decorationComponent } { bookObj.title } { bookObj.sale && saleImage } </li>
      )
    })
   }
  </ul>
}

export default Books;