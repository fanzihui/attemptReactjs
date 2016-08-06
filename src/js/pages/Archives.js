import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "肖申克的救赎",
      "这个杀手不太冷",
      "阿甘正传",
      "霸王别姬",
      "美丽人生",
      "千与千寻",
      "辛德勒的名单",
      "海上钢琴师",
      "机器人总动员",
      "盗梦空间",
      "泰坦尼克号",
      "三傻大闹宝莱坞",
      "放牛班的春天",
      "忠犬八公的故事",
      "大话西游之大圣娶亲",
      "龙猫",
      "教父",
      "乱世佳人",
      "天堂电影院",
      "当幸福来敲门",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
