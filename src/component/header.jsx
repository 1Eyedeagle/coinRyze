import gift from "../assets/images/gift.png";
const Header = () => {
  return (
    <header>
      <div className="container-fluid header d-flex justify-content-between">
        <div className="logo pt-2">
          <p>
            Coin<span className="gradient-letter">R</span>yze
          </p>
        </div>
        <div className="gift p-0">
          <img src={gift} alt="gift" className="gift-img" />
        </div>
      </div>
    </header>
  );
};
export default Header;
