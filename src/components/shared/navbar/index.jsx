import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-brand-darkest border-b border-brand-border h-16 px-6 flex items-center justify-between relative z-100">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-lightest"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.295 6.63012C9.29593 6.0057 8 6.72396 8 7.90212V16.0979C8 17.276 9.29592 17.9943 10.295 17.3699L16.8516 13.272C17.7916 12.6845 17.7916 11.3155 16.8516 10.728L10.295 6.63012ZM10 15.1957V8.80424L15.1132 12L10 15.1957Z"
                fill="currentColor"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-brand-lightest text-2xl font-bold tracking-tight">
              MediaBacklogr
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link
            to="/games"
            className="text-brand-light hover:text-brand-lightest transition-colors font-medium"
          >
            Games
          </Link>
          <Link
            to="/movies"
            className="text-brand-light hover:text-brand-lightest transition-colors font-medium"
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}
