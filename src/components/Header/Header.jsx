import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import userPhoto from '../../images/user-img.png';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <button className="header__burger-button" onClick={closeMenu}>
          ✕
        </button>
      ) : (
        <button className="header__burger-button" onClick={openMenu}>
          ☰
        </button>
      )}
      <header className={`header ${isOpen ? 'header--open' : ''}`}>
        <div
          className={`header__content ${isOpen ? 'header__content--open' : ''}`}
        >
          <div className="header__inner">
            <Link className="header__logo-link" to="/">
              <Icon
                className="header__logo-icon"
                id="logo"
                width="37"
                height="37"
              />
              <p className="header__logo-name">Dashboard </p>
              <p className="header__logo-version">v.01</p>
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/dashboard" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--dashboard"
                      id="dashboard"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Dashboard</p>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/product" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--product"
                      id="product"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Product</p>
                    <Icon
                      className="header__nav-arrow"
                      id="arrow"
                      width="16"
                      height="16"
                    />
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/customers" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--customers"
                      id="customers"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Customers</p>
                    <Icon
                      className="header__nav-arrow"
                      id="arrow"
                      width="16"
                      height="16"
                    />
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/income" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--income"
                      id="income"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Income</p>
                    <Icon
                      className="header__nav-arrow"
                      id="arrow"
                      width="16"
                      height="16"
                    />
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/promote" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--promote"
                      id="promote"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Promote</p>
                    <Icon
                      className="header__nav-arrow"
                      id="arrow"
                      width="16"
                      height="16"
                    />
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/help" onClick={closeMenu}>
                    <Icon
                      className="header__nav-icon header__nav-icon--help"
                      id="help"
                      width="24"
                      height="24"
                    />
                    <p className="header__nav-text">Help</p>
                    <Icon
                      className="header__nav-arrow"
                      id="arrow"
                      width="16"
                      height="16"
                    />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__user">
            <img
              className="header__user-photo"
              src={userPhoto}
              alt="user photo"
            />
            <ul className="header__user-list">
              <li className="header__user-item">
                <p className="header__user-name">Evano</p>
              </li>
              <li className="header__user-item">
                <p className="header__user-position">Project Manager</p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
