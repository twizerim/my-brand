import { Form, Input } from 'antd';

export default function SearchForm(props){
    return (
        <>
          <Form className='pt-7'>
            <Form.Item name="searchTerm" label={props.name}>
                <Input.Search/>
            </Form.Item>
          </Form>
        </>
    )
}