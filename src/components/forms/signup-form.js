import { Button, Checkbox, Form, Input } from 'antd';
import { useSignUp } from '../hook/usesignup';
import { LoginOutlined, UserOutlined, MailOutlined, PushpinOutlined } from '@ant-design/icons';

export default function Signupform() {
  const { HandleInputchange, HandleSubmition, formData } = useSignUp();

  return (
    <Form
      onFinish={HandleSubmition}
      layout="vertical"
      className="w-full"
    >
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
          value={formData.firstName}
          onChange={HandleInputchange}
          className="w-full md:w-1/2"
        >
          <Input prefix={<UserOutlined style={{ color: "#F0147A" }} />} />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
          value={formData.lastName}
          onChange={HandleInputchange}
          className="w-full md:w-1/2"
        >
          <Input prefix={<UserOutlined style={{ color: "#F0147A" }} />} />
        </Form.Item>
      </div>

    
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        value={formData.username}
        onChange={HandleInputchange}
      >
        <Input prefix={<MailOutlined style={{ color: "#F0147A" }} />} />
      </Form.Item>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4">
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          value={formData.password}
          onChange={HandleInputchange}
          className="w-full md:w-1/2"
        >
          <Input.Password prefix={<PushpinOutlined style={{ color: "#F0147A" }} />} />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
          value={formData.confirmPassword}
          onChange={HandleInputchange}
          className="w-full md:w-1/2"
        >
          <Input.Password prefix={<PushpinOutlined style={{ color: "#F0147A" }} />} />
        </Form.Item>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6">
        <Form.Item name="remember" valuePropName="checked" className="mb-4 md:mb-0">
          <Checkbox>
            I agree to the <a href="/" className="text-blue-600 underline">terms and conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="flex items-center">
            SIGN UP <LoginOutlined style={{ marginLeft: 8 }} />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}