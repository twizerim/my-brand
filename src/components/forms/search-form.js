import { Form, Input } from 'antd';

export default function SearchForm(){
    return (
        <>
          <Form>
            <Form.Item name="searchTerm" label="Search blog here">
                <Input.Search/>
            </Form.Item>
          </Form>
        </>
    )
}