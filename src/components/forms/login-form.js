import { Button, Form, Input } from 'antd';
import { useLogin } from '../hook/auth';
import { LoginOutlined, PushpinOutlined, MailOutlined } from '@ant-design/icons';

export default function LoginForm() {
  const { formData, HandleSubmit, HandleInputchange } = useLogin();

  return (
    <Form onFinish={HandleSubmit} layout="vertical" className="w-full max-w-md-full mx-auto">
    
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          name="email"
          value={formData.email}
          onChange={HandleInputchange}
          prefix={<MailOutlined style={{ color: "#F0147A" }} />}
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
          onChange={HandleInputchange}
          prefix={<PushpinOutlined style={{ color: "#F0147A" }} />}
        />
      </Form.Item>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 pt-4 md:pt-10">
        <p className="font-bold outline-indigo-200 border-b-2 border-dashed border-indigo-100 cursor-pointer">
          Forgot Password?
        </p>
        <Form.Item className="mb-0">
          <Button type="primary" htmlType="submit" className="flex items-center">
            LOGIN <LoginOutlined style={{ marginLeft: 8 }} />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}