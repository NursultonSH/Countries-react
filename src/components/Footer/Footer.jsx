import './Footer.scss'

const Footer = ({pagination,addCountPagination,showAll,showOnly,filterCountries}) => {
  return (
    <footer className='container'>
        {pagination < filterCountries.length ? <button onClick={addCountPagination}>show more</button> : null}
        {pagination < filterCountries.length ? <button onClick={showAll}>Show all</button> : null}
        {pagination > 8 ? <button onClick={showOnly}>Show only 8</button> : null}
    </footer>
  )
}

export default Footer