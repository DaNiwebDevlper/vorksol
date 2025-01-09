import React from 'react'

const Search = () => {
    return (
        <div className='flex border border-white/20 rounded-lg w-[300px] overflow-hidden bg-[#1C1C1C]'>
            <button className="flex items-center justify-center pl-2">
                <img src="/assets/search.png" alt="search-icon" className='w-6' />
            </button>
            <input type="search" placeholder='search by club name...' className='w-full bg-[#1C1C1C] text-white border-none outline-none py-2 px-2' />
        </div>
    )
}

export default Search
