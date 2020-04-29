import React from 'react';
import { observer, inject } from 'mobx-react';
import {Button, Card} from 'antd';
import BasicLayout from '../layouts/BasicLayout';
import { delay } from '../utils/helper';

import './get_start.less';

@inject('appGlobalModel')
@inject('modelGet_start')
@observer
class Get_startPage extends React.Component {
  constructor(props) {
    super();
    this.globalStore = props.appGlobalModel;
    this.store = props.modelGet_start;
  }

  static getInitialProps = async ctx => {
    console.log(ctx);
    ctx.pageModelNames = ['appGlobalModel', 'modelGet_start'];
    // await delay(1);
    return {
      appGlobalModel: {},
      modelGet_start: { demo: 222 }, // 模块内容
    };
  };

  render() {
    const {} = this.store;
    return (
      <div className="page-get_start">
        <BasicLayout>
          <Card>
            我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面我是新手入门页面
          </Card>
        </BasicLayout>
      </div>
    );
  }
}

export default Get_startPage;
