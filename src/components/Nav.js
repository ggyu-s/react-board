import React, { useCallback, useEffect } from "react";
import { Menu, Layout } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/user";

const { Header } = Layout;

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogInUser, isLogOutDone } = useSelector((state) => state.user);

  const movePage = (path) => {
    history.push(path);
  };

  const onClickLogOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    if (isLogOutDone) {
      movePage("/");
    }
  });

  return (
    <>
      <Layout className="layout">
        <Header style={{ background: "white", display: "flex" }}>
          <div
            className="logo"
            style={{ marginRight: "auto", cursor: "pointer" }}
            onClick={() => movePage("/")}
          >
            LOGO
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" onClick={() => movePage("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={() => movePage("/board")}>
              board
            </Menu.Item>
            {!isLogInUser ? (
              <>
                <Menu.Item key="3" onClick={() => movePage("/login")}>
                  login
                </Menu.Item>
                <Menu.Item key="4" onClick={() => movePage("/join")}>
                  join
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="5" onClick={() => movePage("/profile")}>
                  profile
                </Menu.Item>
                <Menu.Item key="6" onClick={onClickLogOut}>
                  logout
                </Menu.Item>
              </>
            )}
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Nav;
