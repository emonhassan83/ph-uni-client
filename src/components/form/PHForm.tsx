import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFromProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig;

const PHForm = ({ onSubmit, children, defaultValues, resolver }: TFromProps) => {
  const fromConfig: TFromConfig = {};

  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    fromConfig["resolver"] = resolver;
  }
  const methods = useForm(fromConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PHForm;
