const Footer = ({ logo }) => {
  return (
    <div>
      <footer className="footer">
        <hr />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/carevick/";
          }}
        >
          Visit KC&apos;s GitHub
          <img src="./3d_cro.jpg" alt="logo" height={50} width={50}>
            {logo}
          </img>
        </button>
        Made in Croatia
      </footer>
    </div>
  );
};

export default Footer;
