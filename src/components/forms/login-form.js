import { Button, Checkbox, Form, Input } from 'antd';
import { useLogin } from '../hook/usemutation';

export default function LoginForm() {
  const { formData, HandleSubmit, HandleInputlogin } = useLogin();

  return (
    <Form onFinish={HandleSubmit}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          name="email"
          value={formData.email}
          onChange={HandleInputlogin}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          name="password"
          value={formData.password}
          onChange={HandleInputlogin}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  );
}
