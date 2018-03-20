
    var html = $('.askContent').html()
    mui('body').on('tap','.toAsk',function () {
        layer.open({
            type:1
            ,content: html
            ,anim: 'up'
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 382px; padding:10px 0; border:none;'
        });
    })
    //点击评价提交,弹窗逻辑
    mui('body')
        .on('tap','.release',function () {
        layer.closeAll()
        mui.alert('评价已提交,感谢您的建议(づ￣ 3￣)づ', '我是女王');
    })
        .on('tap','.stars li',function () {
            var items = $('.layui-m-layermain .stars li')
            var sums = ($(this).index())

            for(var i = items.length - 1;i>sums;i--){
                items.eq(i).html('<img src="../icon/starsEmpry.png">')
            }
            for(var i = 0;i<sums+1;i++){
                items.eq(i).html('<img src="../icon/starFull.png">')
            }
            for(var i in (items.length - sums)){
                console.log(items[i])
            }
            //评星
            $('.scoreCode').html((sums+1)+'星')
        })



