
		mui.init({
			pullRefresh: {
					container: '.wrapper',
					down: {
						callback: pulldownRefresh
					},
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
		})
		//获取滚动能力
		mui('.mui-scroll-wrapper').scroll({
            indicators: false //是否显示滚动条
        });
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.1 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        function pulldownRefresh() {
			setTimeout(function() {
				mui.toast('暂无更多内容')
				mui('.wrapper').pullRefresh().endPulldownToRefresh(); //refresh completed
			}, 1500);
		}
        var count = 0;
			/**
			 * 上拉加载具体业务实现
			 */
		function pullupRefresh() {
			setTimeout(function() {
				mui('.wrapper').pullRefresh().endPullupToRefresh((count ===0)); //参数为true代表没有更多数据了。
			}, 1500);
		}