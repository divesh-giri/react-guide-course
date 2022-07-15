import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quotesId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
