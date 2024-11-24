import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-notfound container">
      <h1>404 - Page not found</h1>
      <p><Ghost /></p>
      <p>Oops! The page you are looking for does not exist and it is getting dark. </p>
      <a href="/">Go back home</a>
    </div>
  );
};
