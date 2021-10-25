import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";

function Layout() {
  const { url } = useRouteMatch();
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path={`${url}`}>
            <DeckList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
