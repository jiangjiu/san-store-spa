import {connect} from 'san-store';
import san from 'san';

const About = san.defineComponent({
    template: `
        <div>
            <span>目前状态：{{orderState}}</span>
            <button on-click="onClick">订单更改为状态3：交易完成</button>
        </div>
    `,

    onClick() {
        // 改变订单状态至交易完成，简单起见就不做成下拉框可选形式了
        this.actions.changeOrderState(3);
    }
});

export default connect.san(
    {orderState: 'orderState'},
    {changeOrderState: 'changeOrderState'}
)(About);
