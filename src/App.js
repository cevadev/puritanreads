import React from "react";

import { SearchBook } from "./SearchBook";
import { BookList } from "./BookList";
import { Book } from "./Book";

//import './App.css';

function App() {
  return (
    <React.Fragment>
      <SearchBook />
      <BookList>
        <Book />
      </BookList>
    </React.Fragment>
  );
}

export default App;
