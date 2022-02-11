import React from "react";
import HeaderNav from './Components/HeaderNav'
import SearchResults from "./Components/SearchResults";


class App extends React.Component {

  render() {
    return(
      <div>
        <HeaderNav/>
        <SearchResults/>
      </div>
    );
  }
}

export default App;
