import React from "react";
import Styled from "styled-components";
import { Search } from "styled-icons/boxicons-regular/Search";

const SearchStyles = Styled.form`
margin: 0 56px;
flex:1;
max-width:575px;

`;

function SearchBar() {
  return (
    <SearchStyles action="POST" className="m-auto">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <SearchIcone />
          </span>
        </div>
      </div>
    </SearchStyles>
  );
}

const SearchIcone = Styled(Search)`
width:25px;
`;

export default SearchBar;
