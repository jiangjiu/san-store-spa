import {updateBuilder} from 'san-update/src/index';
import {store} from 'san-store';

// 第一个action，处理边界条件和异步请求
store.addAction('changeOrderState', (state, {getState, dispatch}) => {
    // 取出当前订单状态值，如果为空就初始化为1
    const orderState = getState('orderState');
    if (!state) {
        return dispatch('fillOrderState', 1);
    }
    // 如果改变的订单值和原来状态相同或异常值就不更新了
    else if (state === orderState || state < 1 || state > 3) {
        return;
    }
    // 符合修改条件后，发起异步请求
    // axios.post('/api/orderState', {state})
    //     .then(res => {
    //         // 状态码正确，修改store中的订单值
    //         if (res.status === 200) {
                dispatch('fillOrderState', state);
    //         }
    //
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
});
// 同步orderState值
store.addAction('fillOrderState', state => updateBuilder().set('orderState', state));

store.dispatch('fillOrderState', 1);
