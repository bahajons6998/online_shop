import React, { JSX, useState } from 'react';
import { FormProps, Select } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from "axios";
import { Option } from "antd/lib/mentions";
import { Link, Navigate, useNavigate } from "react-router";
import { register_user } from '../utils/Api_fetch';

type FieldType = {
    email?: string;
    password?: string;
    username?: string;
    isAdmin?: boolean;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


export default function Register(): JSX.Element {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        isAdmin: false,
    });
    // const [errormessage, setErrormessage] = useState('');

    const onFinish = (values: FieldType) => {
        console.log('Success:', values);
        if (user.username && user.email && user.password) {

            register_user(user)
                .then(res => {
                    console.log(res)
                    alert("User created")
                    navigate('/login')
                })
                .catch((err) => {
                    // setErrormessage(err.response.data.message);
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
            <h1 className={'text-center mt-4'}>Register</h1>
            <Form
                name="basic"
                className={'mt-3 mx-auto'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onValuesChange={onChange}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
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
                <Form.Item<FieldType> name="isAdmin" label="Role" rules={[{ required: true }]}>
                    <Select
                        placeholder="Choose a role"
                        allowClear
                    >
                        <Select.Option value="false">User</Select.Option>
                        <Select.Option value="true">Admin</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item className='text-center'>
                    <Link className={'text-decoration-none text-center'} to={'/login'}>Login</Link>
                </Form.Item>
                {/*<Form.Item>*/}
                {/*    {errormessage.length > 0 && <p className={'text-center text-danger'}>{errormessage}</p>}*/}
                {/*</Form.Item>*/}


                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


