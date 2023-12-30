// Portal Header for logged in users
// Path: src/components/Portal/PortalHeader/PortalHeader.js
import { Link, useNavigate } from "react-router-dom";
import "./PortalHeader.css";
import { useEffect } from "react";
function PortalHeader(user) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="portalHeader">
        <div className="portalHeader__container">
          <div className="portalHeader__nav">
            <div className="portalHeader__option">
              <span className="portalHeader__optionLineOne">Hello,</span>
              <span className="portalHeader__optionLineTwo">
                {user.user.name}
              </span>
            </div>

            <div className="portalHeader__bottom">
              <div className="portalHeader__bottomContainer">
                <Link to="/portal">
                  <div className="portalHeader__bottomOption">
                    <span className="portalHeader__optionLineTwo">Home</span>
                  </div>
                </Link>
                <div className="portalHeader__bottomOption">
                  <span className="portalHeader__optionLineTwo">Orders</span>
                </div>
                <div className="portalHeader__bottomOption">
                  <span className="portalHeader__optionLineTwo">Products</span>
                </div>
                <div className="portalHeader__bottomOption">
                  <span className="portalHeader__optionLineTwo">Account</span>
                </div>
                <div className="portalHeader__bottomOption">
                  <span className="portalHeader__optionLineTwo">Schedules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PortalHeader;
