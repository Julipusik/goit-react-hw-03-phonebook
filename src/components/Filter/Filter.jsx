import React from "react";
import { FilterContainer, FilterInput } from "./Filter.styled";

export const Filter = ({filter, changeFilter}) => {
    return (
        <FilterContainer>
            <p>Find contacts by name:</p>
            <FilterInput type="text" name="filter" value={filter} onChange={changeFilter} placeholder="Search contact"></FilterInput>
        </FilterContainer >
    )
}
