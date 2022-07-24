const SearchBox = ( {search} ) =>{
    return (
        <div className='SearchBox'>
            <input 
                type='search' 
                placeholder='Looking for?'
                onChange={search} 
            />
            <i class="fa fa-search"></i>
        </div>
    )
}

export default SearchBox;