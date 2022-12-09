import { UserOutlined } from "@ant-design/icons";
import Button from "../Utils/Button";

export default function MyProfileButton() {
  const userIcon = (
    <UserOutlined style={{ fontSize: 14, marginRight: "10px" }}></UserOutlined>
  );
  return (
    <Button
      text="Mon profil"
      color="black"
      background="#F5F5F5"
      borderRadius="10px 10px 0px 0px"
      icon={userIcon}
    ></Button>
  );
}
