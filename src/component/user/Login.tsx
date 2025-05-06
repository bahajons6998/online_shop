import React, { JSX, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from "react-router";
import { login_user } from '../utils/Api_fetch';

type FieldType = {
    email?: string;
    password?: string;
    username?: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


export default function Login(): JSX.Element {
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    });
    const navigate = useNavigate()
    const [errormessage, setErrormessage] = useState('');

    function onFinish() {
        console.log('onfinish', user);

        if (user.username && user.email && user.password) {
            login_user(user)
                .then(res => {
                    localStorage.setItem('token', res.data.accessToken);
                    navigate('/');
                    // prompt("User created")
                    console.log(res)
                })
                .catch((err) => {
                    setErrormessage(err.response.data.message);
                    console.log(err)
                })
        }
    }

    const onChange = (values: FieldType) => {

        console.log('Success:', values);
        setUser({
            ...user,
            ...values
        });
    }

    return (
        <div className={'container'}>
            <h1 className={'text-center mt-4'}>Login</h1>
            <Form
                name="basic"
                className={'mt-3 mx-auto'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                // onFinish={onFinish}
                onValuesChange={onChange}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    initialValue={user.email}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    initialValue={user.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    initialValue={user.password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className='text-center'>
                    <Link className={'text-decoration-none'} to={'/register'}>Register</Link>
                </Form.Item>
                <Form.Item>
                    {errormessage.length > 0 && <p className={'text-center text-danger'}>{errormessage}</p>}
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="button" onClick={onFinish}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


