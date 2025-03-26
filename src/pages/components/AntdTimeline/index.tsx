import { Steps } from 'antd';

const { Step } = Steps;

const AntdTimeline = () => (
  <Steps current={1}>
    <Step title="相识" description="2015-09-01" />
    <Step title="恋爱" description="2016-01-01" />
    <Step title="订婚" description="2018-06-01" />
    <Step title="结婚" description="2019-09-01" />
  </Steps>
);

export default AntdTimeline;