import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps } from "antd";
import { useCallback, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCombineTranslation from "./commons/hooks/useCombineTranslation";
import { routes } from "./routes";

const { Sider } = Layout;

const MainSidebar = () => {
  const { tMenu } = useCombineTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const root = useRef(document.documentElement);
  const toggleSidebar = useCallback(
    () =>
      setCollapsed((prev) => {
        if (root.current) {
          root.current.style.setProperty(
            "--sidebar-width",
            !prev ? "68px" : "260px"
          );
        }
        return !prev;
      }),
    []
  );
  const menuItems = useMemo(() => {
    return routes[0].children
      ?.filter((item) => !item.hidden)
      .map(({ icon, path }) => {
        if (!path) return null;
        const key = `${routes[0].path}${path}`;
        return {
          key,
          icon,
          label: tMenu(path),
        };
      });
  }, [tMenu]);
  const handleMenuClick = useCallback<NonNullable<MenuProps["onClick"]>>(
    ({ key }) => navigate(key),
    [navigate]
  );

  return (
    <Sider
      style={{ width: 200 }}
      collapsed={collapsed}
      breakpoint="lg"
      onBreakpoint={toggleSidebar}
      className="relative"
    >
      <Menu
        defaultSelectedKeys={[pathname]}
        onClick={handleMenuClick}
        mode="inline"
        items={menuItems}
      />
      <Button
        className="absolute right-[-5px] bottom-2.5 transform translate-x-1/2 translate-y-0 rounded-full"
        onClick={toggleSidebar}
        icon={<LeftOutlined rotate={collapsed ? 180 : 0} />}
      />
    </Sider>
  );
};

export default MainSidebar;
