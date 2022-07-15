import QuoteList from "../components/quotes/QuoteList";

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
const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
