import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const PHInput = ({ type, name, label, disabled }: TInputProps) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <Controller
        name={name}
        render={({ field }) => (
        <Form.Item label={label}>
        <Input type={type} id={name} disabled={disabled} {...field} />
        </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
