import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const {
    sendRequest,
    status,
    data: quoteData,
  } = useHttp(getSingleQuote, true);
  const params = useParams();
  const match = useRouteMatch();
  const id = params.quotesId;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  return (
    <>
      <HighlightedQuote author={quoteData.author} text={quoteData.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
