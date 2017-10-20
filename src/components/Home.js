import {connect} from 'san-store';
import san from 'san';

const Home = san.defineComponent({
    template: `
        <div>
            <p>目前状态：{{orderState}}</p>
            <button on-click="onClick">订单更改为状态2：待发货</button>
        </div>
    `,
    onClick() {
        // 改变订单状态至待发货，简单起见就不做成下拉框可选形式了
        this.actions.changeOrderState(2);
    }
});

// 连接这个组件至store
export default connect.san(
    {orderState: 'orderState'},
    {changeOrderState: 'changeOrderState'}
)(Home);
