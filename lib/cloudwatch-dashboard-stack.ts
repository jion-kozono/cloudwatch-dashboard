import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cw from '../lib/index';

export class CloudwatchDashboardStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dashboard = new cw.cloudwatchDashboardStack(this, 'cloudwatch-Dashboard');
  }
}
