var login=(function(){
	return{
		init:function(){
			this.$loginBtn=document.querySelector('.btn');
			this.$loginEwm=document.querySelector('.login-none');
			this.$loginClick=document.querySelector('.login-click');
			this.$ewm=document.querySelector('.login-ewm');
			this.$loginUser=document.querySelector('.login-user');
			this.$inpU=document.querySelector('.username');
			this.$psw=document.querySelector('.password');
			this.$tipError=document.querySelector('.tip-error');
			this.event();
		},
		event:function(){
			var _this=this;
			//登入方式切换
			this.$loginEwm.onclick=function () {
                _this.$loginUser.style.display='none';
                _this.$ewm.style.display='block';
                _this.$loginEwm.style.color='#f56600';
                _this.$loginClick.style.color='#666';
                $('.login-phone').css('display','none');
                $('.login-click').hover(function () {
                    $('.login-click').css('color','#ef5b00');
                },function () {
                    $('.login-click').css('color','#666');
                });
            };
			this.$loginClick.onclick=function () {
                _this.$loginUser.style.display='block';
                _this.$ewm.style.display='none';
                _this.$loginEwm.style.color='#666';
                _this.$loginClick.style.color='#f56600';
            };
			$('.phone').on('click',function () {
                _this.$loginUser.style.display='none';
                $('.login-phone').css('display','block');
            });
			$('.tel-phone').on('click',function () {
                $('.login-phone').css('display','none');
                _this.$loginUser.style.display='block';
            })
			//账号验证
			this.$loginBtn.onclick=function(){
                var reg = /^[a-zA-Z0-9_-]{4,16}$/;
                var flag = reg.test(_this.$inpU.value);
                if(_this.$inpU.value == ''){
                    // alert('请输入账号')
                    _this.$tipError.style.display='block';
                    $('.err-blank').css('display','inline-block');
                }else if(flag){
                    //发送ajax，验证用户名和密码
                    var params = {
                        method: 'post',
                        data:{
                            username:_this.$inpU.value,
                            password:_this.$psw.value
                        },
                        success:function(data){
                            data = JSON.parse(data);
                            _this.loginSuccess(data);
                        }
                    };
                    sendAjax('http://localhost:8081/project/xiaomi/php/login.php',params);
                }
			}
		},
		loginSuccess:function(data){
          	var _this=this;
            if(data.code == 200){
                // document.cookie = "token=" + data.data.token;
                //document.cookie = "user-id=" + data.data.id;
				location.href = 'success.html';
            }else{
				_this.$tipError.style.display='block';
                $('.err-user').css('display','inline-block');
            }
		}
	}
}());

