import { Button, Row } from 'antd';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { TResponse } from '../types';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../redux/features/admin/userManagementApi';
import { toast } from 'sonner';

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
        toast.success("Student has successfully changed password!")
      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Save</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;