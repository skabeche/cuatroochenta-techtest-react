import { useEffect } from "react";
import { useMatches } from "react-router-dom";

export default function PageCssClassManager() {
  // useMatches must be used within a data router and it will not work on RouterProvider in our current App.jsx.
  const matches = useMatches();

  useEffect(() => {
    if (matches.length > 0) {
      // Get the last matched route for the current navigation.
      const currentRoute = matches[matches.length - 1];
      const pageCssClass = currentRoute.handle?.pageCssClass || 'page-default';

      document.body.classList.add(pageCssClass);

      return;
    }

    document.body.classList.add('page-default');
    return () => {
      document.body.className = "";
    };
  }, [matches]);

  return null;
};
