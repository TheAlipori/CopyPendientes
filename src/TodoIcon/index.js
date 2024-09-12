import { BsFillForwardFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <BsFillForwardFill className="Icon-svg" fill={color} />,
  delete: (color) => <TiDelete className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span onClick={onClick} className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
