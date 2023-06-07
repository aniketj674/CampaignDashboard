import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from "material-ui-search-bar";
import DatePicker from "react-datepicker";
import { updateSearchedValue, updateStartDate, updateEndDate } from "../../reduxStore/actions/index";
import {
    SearchContainer, DateContainer, FilterContainer, DateWrapper
} from './FilterComponent.style';

function FilterComponent() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchedValue, setSearchedValue] = useState("");
    const dispatch = useDispatch();
    

    function updatedate(dateType, date) {
        if(dateType === "start") {
            setStartDate(date);
            dispatch(updateStartDate(date));
        } else {
            setEndDate(date);
            dispatch(updateEndDate(date));
        }
    }

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    return(
        <FilterContainer>
            <DateContainer>
                <DateWrapper>
                <label>Start Date:</label>
                <span data-testid="start-date">
                    <DatePicker title="startDate" selected={startDate} onChange={(date) => updatedate("start", date)} />
                </span>
                </DateWrapper>
                <DateWrapper>
                <label>End Date:</label>
                <span data-testid="end-date">
                <DatePicker title="endDate" selected={endDate} onChange={(date) => updatedate("end", date)}/>
                </span>
                </DateWrapper>
            </DateContainer>
            <SearchContainer>
                <SearchBar
                    value={searchedValue}
                    onChange={debounce((searchVal) => {setSearchedValue(searchVal);dispatch(updateSearchedValue(searchVal));})}
                    onCancelSearch={() => {setSearchedValue(""); dispatch(updateSearchedValue(""))}}
                    data-testid="search"
                />
            </SearchContainer>
        </FilterContainer>
);}

export default FilterComponent;