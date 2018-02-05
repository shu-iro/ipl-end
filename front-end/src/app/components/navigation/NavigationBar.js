// @flow weak

import React,
  { PureComponent }       from 'react';
import PropTypes          from 'prop-types';
import {Layout, Menu, Icon} from 'antd';
import styles from './NavigationBar.scss';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class NavigationBar extends PureComponent {
  // eslint-disable-next-line no-undef
  static propTypes = {
    collapsedNav: PropTypes.bool.isRequired
  };

  render() {
    const { collapsedNav } = this.props;
    console.log(collapsedNav);
    return (
      <Sider style={{display:collapsedNav?"none":"block"}} >
        <div className={styles.logo}>
          <Icon type="qrcode" style={{fontSize:48}} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="home" />
            <span>O19</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="home" />
            <span>O25</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="home" /><span>O26</span></span>}
          >
            <Menu.Item key="3">Machine 1</Menu.Item>
            <Menu.Item key="4">Machine 2</Menu.Item>
            <Menu.Item key="5">Machine 3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default NavigationBar;
