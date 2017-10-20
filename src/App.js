import san from 'san';
import {Link} from 'san-router';

export default san.defineComponent({
    components: {
        'router-link': Link
    },
    template: `
          <div class="app-container">
            <div class="app-drawer">
                <div class="drawer-title">
                  <h3>XXX管理系统</h3>
                </div>
                <div class="menu">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/list">List</router-link></li>
                        <li><router-link to="/about">about</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="app-bar">
                <div class="user-info">
                    <span>userName</span>
                </div>
            </div>
            <div class="app-content">
              <!-- 逻辑组件渲染处 -->
              <div id="main"></div>
            </div>
           </div>
    `
});
