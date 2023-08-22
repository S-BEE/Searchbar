import './filter.css'
import DATA from './MOCK_DATA.json'
import { useState } from 'react'

const FilterName = ()=>{
    const [searchItem, setSearchItem] = useState('')
    function search (e){
        setSearchItem(e.target.value)
    }

    return(
        <>
        <div className='container'>
            <div className="filterApp">
                <input type="text" placeholder='Search ... ' onChange={search} />
                {DATA.filter((item)=>{
                    if (searchItem == ''){
                        return item
                    }else if(item.first_name.toLowerCase().includes(searchItem.toLowerCase())){
                        return item
                    }
                }).map((item,key)=>{
                    return(
                        <div className='user key={key}'><p>{item.first_name}</p></div>
                    )
                })} 
            </div>
        </div>
        </>

    )
}

export default FilterName