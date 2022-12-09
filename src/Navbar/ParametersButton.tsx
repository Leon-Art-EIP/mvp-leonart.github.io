import { SettingOutlined } from "@ant-design/icons";
import Button from "../Utils/Button";

export default function ParametersButton() {
  const parameterIcon = (
    <SettingOutlined style={{ fontSize: 14, marginRight: "10px" }} />
  );
  return (
    <>
      <Button
        text="Paramètres"
        color="black"
        background="#F5F5F5"
        borderRadius="0px 0px 0px 0px"
        icon={parameterIcon}
      ></Button>
    </>
  );
}
