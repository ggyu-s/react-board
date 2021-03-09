import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/user";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogInLoading, isLogInDone } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(
      login({
        type: USER_LOGIN_SUCCESS,
        payload: {
          email,
          password,
        },
      })
    );
  }, [dispatch, email, password]);
  useEffect(() => {
    if (isLogInDone) {
      history.push("/");
    }
  }, [isLogInDone, history]);
  return (
    <>
      <Form onFinish={onSubmit}>
        <Input
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
          type="email"
        />
        <Input
          placeholder="password"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <Button htmlType="submit" loading={isLogInLoading}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
