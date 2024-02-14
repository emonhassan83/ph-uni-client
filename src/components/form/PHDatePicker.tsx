import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePikerProps = {
  name: string;
  label?: string;
};

const PHDatePiker = ({ name, label }: TDatePikerProps) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <Controller
        name={name}
        render={({ field }) => (
        <Form.Item label={label}>
        <DatePicker {...field} size="large" style={{width: "100%"}} />
        </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePiker;
