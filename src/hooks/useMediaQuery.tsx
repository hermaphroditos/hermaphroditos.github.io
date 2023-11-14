import { useState, useEffect } from "react";

type queryProps = {
  query: string,
}

const useMediaQuery = (query: queryProps): boolean  => {
  const [matches, setMatches ] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query.query);
    if(media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);

  }, [matches, query]);

  return matches;
}


export default useMediaQuery;