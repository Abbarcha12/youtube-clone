import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
// import Sidebar2 from "./siderbar2.js"
import RecommendedVedios from "./RecommendedVedios"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Find from "./find.js"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <searchPage />
        <Switch>
          <Route path="/search/:SearchTerm">
            <Sidebar />
            <Find />
          </Route>
          <Route path="/">

            <div className="app_page">
              <Sidebar />
              <RecommendedVedios />
            </div>
          </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
