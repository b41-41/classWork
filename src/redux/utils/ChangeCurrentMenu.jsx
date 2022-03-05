import { useDispatch } from "react-redux";
import { updateCurrentMenu } from "redux/slices/menu";

const ChangeCurrentMenu = (menu) => {
  const dispatch = useDispatch();
  dispatch(updateCurrentMenu(menu));
};

export default ChangeCurrentMenu;
