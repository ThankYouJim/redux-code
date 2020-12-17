import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Create from "./streams/Create";
import Delete from "./streams/Delete";
import Edit from "./streams/Edit";
import List from "./streams/List";
import Show from "./streams/Show";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={List} />
          <Route path="/streams/new" exact component={Create} />
          <Route path="/streams/edit" exact component={Edit} />
          <Route path="/streams/delete" exact component={Delete} />
          <Route path="/streams/show" exact component={Show} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
