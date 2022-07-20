import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();

  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get("sort") === "asc";

  const sortingHandler = () => {
    history.push(`/quotes?sort=${isAscending ? "desc" : "asc"}`);
  };

  const sortedQuotes = sortQuotes(props.quotes, isAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text.toLowerCase()}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
