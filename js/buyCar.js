//因为mui更新,mui-scroll中元素不支持click事件,20180227 17:30进行代码迁移
$(function(){
	//购物车加减
	mui('body')
	.on('tap','.inputs i:first-of-type',function(){
		console.log('减商品')
		if(parseInt($(this).siblings('.goodsNum').html())<=1){
			deleteItem()
			return
		}
		$(this).siblings('.goodsNum').html($(this).siblings('.goodsNum').html() - 1)
	})
	.on('tap','.inputs i:last-of-type',function(){
		console.log('加商品')
		$(this).siblings('.goodsNum').html(parseInt($(this).siblings('.goodsNum').html()) + 1)
	})
	//点击删除按钮
	.on('tap','.rubbish',function(){
		deleteItem()
	})
	//toPay
	.on('tap','.topay',function(){
		mui.toast('页面正在建设中');
	})
	.on('tap','i.queen.big.queen-webicon19',function () {
		if($(this).hasClass('active')){
			$(this).removeClass('active')
		}else{
            $(this).addClass('active')
		}
    })
})
//删除购物车
function deleteItem(){
	console.log('1')
	mui.confirm('确定删除当前商品?', '我是女王', ['否', '是'], function(e) {
		if (e.index == 1) {
			//执行删除操作
			console.log('删除')
		}else if(e.index ==0){
			console.log('闹着玩儿呢哈哈')
		}
	})
}
