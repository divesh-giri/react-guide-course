import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Osamu Dazai",
//     text: "STOP PITYING YOURSELF.  PITY YOURSELF, AND LIFE BECOMES AN ENDLESS NIGHTMARE.",
//   },
//   {
//     id: "q2",
//     author: "Monkey D. Luffy",
//     text: "If you don’t take risks, you can’t create a future!",
//   },
// ];
const AllQuotes = () => {
  const { sendRequest, data, status, error } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return (
    <>
      {status === "pending" && <LoadingSpinner />}
      {status === "error" && <p>An Error Occured! {error}</p>}
      {data === null ? <NoQuotesFound /> : <QuoteList quotes={data} />}
    </>
  );
};

export default AllQuotes;
