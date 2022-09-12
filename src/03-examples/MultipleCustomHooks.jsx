import { useFetch, useCounter } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, incrementCounter } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={ author } quote={ quote } />}

      {/* IncrementCounter recibe un valor como argumento pero aca solo le estoy pidiendo que ejecute la funcion sin el valor */}
      <button onClick={() => incrementCounter()} className="btn btn-primary">
        Next Quote
      </button>
    </>
  );
};
