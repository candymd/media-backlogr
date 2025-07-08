import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div
      className="flex flex-col min-h-screen max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4"
      role="main"
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
