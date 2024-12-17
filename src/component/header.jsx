import gift from "../assets/images/gift.png";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGiftClick = () => {
    navigate("/coinRyze/login"); // Navigate to the login page
  };

  return (
    <header>
      <div className="container-fluid header d-flex justify-content-between">
        <div className="logo pt-2">
          <p>
            Coin<span className="gradient-letter">R</span>yze
          </p>
        </div>
        {/* Button to trigger navigation */}
        <div onClick={handleGiftClick} style={{ cursor: "pointer" }}>
          <div className="gift p-0">
            <img src={gift} alt="gift" className="gift-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
