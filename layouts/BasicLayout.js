import React, { Fragment, PureComponent } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { observer, inject } from 'mobx-react';
import MediaQuery from './MediaQuery';
import './index.less';

const { Header, Content, Footer } = Layout;

@withRouter
@inject('appGlobalModel')
@observer
class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.globalStore = props.appGlobalModel;
  }

  componentDidMount() {}

  renderMenus = () => {
    const {
      router: { pathname },
    } = this.props;
    const { menus } = this.globalStore;
    return (
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={[pathname]}
        style={{ lineHeight: '63px' }}
      >
        {menus &&
          menus.map(item => (
            <Menu.Item key={item.path}>
              <Link href={item.path}>
                <a>{item.name}</a>
              </Link>
            </Menu.Item>
          ))}
      </Menu>
    );
  };

  renderHeader = () => {
    return (
      <Header className="header" theme="">
        <Row>
          <Col span={6}>
            <div className="header__logo">
              <img
                className="header__logo-img"
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2102812862,697864703&fm=26&gp=0.jpg"
              />
              <div className="header__logo-name">LLzzzzzz</div>
            </div>
          </Col>
          <Col span={12}>{this.renderMenus()}</Col>
        </Row>
      </Header>
    );
  };

  renderFooter() {
    return <Footer className="footer">这是底部footer</Footer>;
  }

  render() {
    const { children } = this.props;
    const { screen } = this.globalStore;
    return (
      <Layout className="base-layout">
        <MediaQuery />
        <Head>
          <title>llzzzz</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {this.renderHeader()}
        <Content className="content">
          {/*<div>{screen}</div>*/}
          <div style={{ padding: 24, minHeight: 620 }}>
            <div style={{marginBottom: 20}}>My name: Zhaolele</div>
            {children}
            </div>
        </Content>
        {this.renderFooter()}
      </Layout>
    );
  }
}

export default Page;
