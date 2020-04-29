import React from 'react';
import { observer, inject } from 'mobx-react';
// import { delay } from '../utils/helper';
import TweenOne from 'rc-tween-one';
import {Button, Card} from 'antd';
import BasicLayout from '../layouts/BasicLayout';
import './index.less';

@inject('appGlobalModel')
@inject('modelIndex')
@observer
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.modelIndex;
    this.globalStore = props.appGlobalModel;
  }

  static getInitialProps = async ctx => {
    // console.log(ctx);
    ctx.pageModelNames = ['appGlobalModel', 'modelIndex']; // 模块名集合
    // await delay(2);
    return {
      appGlobalModel: {},
      // modelIndex: { demo: 222 }, // 模块内容
    };
  };

  render() {
    // const { demo, changeDemo,blog } = this.store;
    return (
      <BasicLayout>
        <Card>
         <p>about</p>
        </Card>

      </BasicLayout>
    );
  }
}
