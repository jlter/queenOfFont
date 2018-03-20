mui('body')
    //链接
    .on('tap','.linkAllOrders',function () {
    window.location.href='./allOrder.html'
})
    .on('tap','.linkMyMember',function () {
        window.location.href='./myMember.html'
    })
    .on('tap','.linkLoadingAsk',function () {
        window.location.href='./loadingAsk.html'
    })
    .on('tap','.linkLoadingGet',function () {
        window.location.href='./loadingGet.html'
    })
    .on('tap','.linkLoadingPay',function () {
        window.location.href='./loadingPay.html'
    })
    //退款
    .on('tap','.linkBackMoney',function () {
        window.location.href='./backMoney.html'
    })
    //查看物流
    .on('tap','.linkLogistics',function () {
        window.location.href='./logistics.html'
    })
    //联系客服
    .on('tap','.linkCustomerServices',function () {
        window.location.href='./ustomServices.html'
    })
    //查看详情
    .on('tap','.goods-items',function () {
        window.location.href = './orderDesc.html'
    })
    //评论列表
    .on('tap','.linkComments',function () {
        window.location.href = './comment.html'
    })
        //进空购物车
    .on('tap','.linkEmpryBuyCar',function () {
        window.location.href = './buyCarZero.html'
    })
        //地址信息
    .on('tap','.linkAddress',function () {
        window.location.href = './addressOfGoods.html'
    })
        //全部评论
    .on('tap','.linkAllComments',function () {
        window.location.href = './allComments.html'
    })
        //针对评论体评论
    .on('tap','.linkComment',function () {
        window.location.href = './comment.html'
    })
        //进入当条问答
    .on('tap','.linkQA',function () {
        window.location.href = './q&a.html'
    })
        //购物车点击跳转商品详情

    .on('tap','.linkBuycarItems',function (e) {

        window.location.href = './goodsDesc.html'
    })
        //qa跳转到详情页
    .on('tap','.linkQaDesc',function () {
        window.location.href='./q&aDesc.html'
    })
    //空链接
    .on('tap','.linkLoadingSend,.linkToGoodsList,.linkDefaults',function () {
        mui.toast('正在建设中,敬请期待','我是女王')
    })





    //动效
        //点击提醒发货
    .on('tap','.actSendGoods',function () {
        mui.confirm('已通知到客服小姐姐啦~','我是女王',['确定'])
    })
        //点击取消订单
    .on('tap','.actCancelOrder',function () {
        mui.confirm('确认删除订单？', '我是女王', ['取消','确定'], function(e) {
            if (e.index == 1) {
                mui.toast('商品已删除')
            } else {

            }
        })
    })
        //点击确认收货
    .on('tap','.actCheckGoods',function () {
        mui.confirm('确定收到宝贝了嘛？', '我是女王', ['取消','确定'], function(e) {
            if (e.index == 1) {
                mui.toast('确认收货~')
                setTimeout(function () {
                    window.location.href = './loadingAsk.html'
                },800)
            } else {

            }
        })
    })
    //点击退款
    .on('tap','.actBackMoney',function () {
        mui.confirm('确定不想要宝贝了嘛？', '我是女王', ['取消','确定'], function(e) {
            if (e.index == 1) {
                mui.toast('接口尚未完善')

            } else {

            }
        })
    })

        //点击提醒客服（退款处理中）
    .on('tap','.actTipServices',function () {
        mui.confirm('客服MM你们管管我哇？', '我是女王', ['取消','确定'], function(e) {
            if (e.index == 1) {
                mui.toast('已提交~')
            } else {

            }
        })
    })

