import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../../actions/filter'
import { setSortByPrices } from '../../../../actions/sort'

function SortBy() {

    const filter = useSelector( state => state.filter.filter)
    const dispatch = useDispatch()

    function handleSort(){
        let valuesOptions = document.getElementById("myList").value;
        let optionDefaul = document.getElementById("default")
        console.log(optionDefaul)
        if(valuesOptions === "esc"){
            dispatch(setFilter({
                ...filter,
                _page: 1,
                _sort: 'price',
                _order: 'esc'
            }))
        } else if(valuesOptions === "desc"){
            dispatch(setFilter({
                ...filter,
                _page: 1,
                _sort: 'price',
                _order: 'desc'
            }))
        } else if(valuesOptions === "default"){
            dispatch(setFilter({
                ...filter,
                _sort: '',
                _order: '',
        
            }))
        }
        dispatch(setSortByPrices(optionDefaul))
    }

    return (
        <form>
            <b> SortBy </b>
            <select id = "myList" onChange={handleSort}>
                <option id="default" value="default"> Features</option> 
                <option value="esc"> Price ESC </option>
                <option value="desc"> Price DESC </option>
            </select>
        </form>
    );
}

export default SortBy;