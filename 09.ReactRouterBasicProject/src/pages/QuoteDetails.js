import { Redirect, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Osamu Dazai",
    text: "STOP PITYING YOURSELF.  PITY YOURSELF, AND LIFE BECOMES AN ENDLESS NIGHTMARE.",
  },
  {
    id: "q2",
    author: "Monkey D. Luffy",
    text: "If you don’t take risks, you can’t create a future!",
  },
];

const QuoteDetails = () => {
  const params = useParams();
  const id = params.quotesId;
  const quote = DUMMY_QUOTES.find((quote) => quote.id === id);
  if (!quote) {
    return <Redirect to="/not-found"></Redirect>;
  }
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
