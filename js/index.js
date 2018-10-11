//将数据渲染到页面；鼠标滑过样式完善
var login=(function () {
    return{
        init:function () {
            // this.$navItem=document.querySelector('.nav-item');
            // this.$navHidden=document.querySelector('.nav-hidden');
            // this.$list=document.querySelector(".row-list");
            this.event();
            // this.getData();
        },
        event:function () {
            var _this=this;
            $(".login").on('click',function () {
                location.href='login.html';
            });
            $(".register").on('click',function () {
                location.href='register.html';
            });
            $(".btn-text").on('focus',function(){
                $(".search-list").css({"display":"block","border-color":"#ff6700","border-top":"1px #ff6700 solid"});
                $(".btn-text").css("border-color","#ff6700");
                $(".btn-sub").css("border-color","#ff6700");

            });
            $(".btn-text").on('blur',function(){
                $(".search-list").css("display","none");
                $(".btn-text").css("border-color","#e0e0e0");
                $(".btn-sub").css("border-color","#e0e0e0");
            });
            $(".btn-r").on('click',function () {
                $(".wrapper-list").css({"left":"-758px","transition":"0.5s"});
                $(".wrapper-list .icon-xiangyou").css("color","#e8e3e0");
                $(".wrapper-list .icon-xiangzuo").css("color","#b0b0b0")
            });
            $(".btn-l").on('click',function () {
                $(".wrapper-list").css("left","0");
                $(".icon-xiangyou").css("color","#b0b0b0");
                $(".icon-xiangzuo").css("color","#e8e3e0")
            });
            $(".recd-btn-r").on('click',function () {
                $(".recd-main-list").css({'left':'-1226px',"transition":"0.5s"});

                // if(){
                //
                // }
            });
            //nav隐藏下拉框
            $(".nav-item").mouseover(function(){
                $(".nav-hidden").css('height',"234px");
                $(".xiaomi-phone").mousemove(function () {
                    $(".nav-first").css({"display":"block","transition":"0.5s"});
                }).mouseout(function () {
                    $(".nav-first").css({"display":"none","transition":"0.5s"});
                    $(".nav-hidden").mousemove(function () {
                        $(this).css("height", "234px");
                        $('.nav-first').css("display",'block')
                    }).mouseout(function () {
                        $(this).css("height", "0");
                        $('.nav-first').css("display",'none')
                    })
                });
                $('.redmi').mousemove(function () {
                    $('.nav-second').css("display",'block');
                    $(".xiaomi-phone").mouseout(function () {
                        // $(".nav-first").css({"display":"none","transition":"0.5s"});
                    })
                }).mouseout(function () {
                    $('.nav-second').css("display",'none');
                    $(".nav-hidden").mousemove(function () {
                        $(this).css("height", "234px");
                        $('.nav-second').css("display",'block')
                    }).mouseout(function () {
                        $(this).css("height", "0");
                        $('.nav-second').css("display",'none')
                    })
                });
                $(".computer").mousemove(function () {
                    $('.nav-third').css("display",'block')
                }).mouseout(function () {
                    $('.nav-third').css("display", 'none')
                });

            }).mouseout(function(){
                $(".nav-hidden").css('height',"0");
            });


        }
        //获取数据
        // getData:function () {
        //     var _this = this;
        //     var params = {
        //         url: 'json/shop.json',
        //         success:function (data) {
        //             console.log(data);
        //             _this.insertData(data);
        //         }
        //     };
        //     sendAjax(params);
        // },
        // //将数据渲染到页面中
        // insertData:function (data) {
        //     data = data.data;
        //     var arr = [];
        //     for (var i=0;i<data.length;i++){
        //         arr.push(`<li>
        //                     <a href="javascript:;">
        //                         <img src="${data[i].img}">
        //                         <h2>${data[i].h2}</h2>
        //                         <p>${data[i].p}</p>
        //                         <span>${data[i].span}</span>
        //                     </a>
			// 		    </li>`)
        //     }
        //     this.$list.innerHTML = arr.join('');
        // }


    }
}());


