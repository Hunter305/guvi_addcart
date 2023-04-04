const DropDown = (props) => {
  return (
    <div className="d-flex dropdown">
      <button
        className="btn btn-outline-dark"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi-cart-fill me-1"></i>
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {props.countN}
        </span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            {props.name}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
