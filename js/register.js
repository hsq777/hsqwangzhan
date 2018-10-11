var register=(function(){
	return {
		init:function(){
			this.$btn=document.querySelector('.register-btn');
			this.$phone=document.querySelector('.inp');
			this.$error=document.querySelector('.error');
			this.$errBlank=this.$error.querySelector('.err-blank');
			this.$errFalse=this.$error.querySelector('.err-false');
			this.event();
		},
		event:function(){
			var _this=this;
            var reg = /^1[34578][0-9]{9}$/;
            this.$phone.onblur=function () {
                var flag = reg.test(_this.$phone.value);
				if(_this.$phone.value==''){
					_this.$error.style.display='block';
					_this.$errBlank.style.display='block';
                    _this.$phone.className='inp-error';
                    _this.$phone.oninput=function () {
                        _this.$phone.className='inp';
                        _this.$error.style.display='none';
                        _this.$errBlank.style.display='none';
                    }
				}
				else if(flag==false){
                    _this.$error.style.display='block';
                    _this.$errFalse.style.display='block';
					_this.$phone.className='inp-error';
                    _this.$phone.oninput=function () {
                        _this.$phone.className='inp';
                        _this.$error.style.display='none';
                        _this.$errFalse.style.display='none';
                    }
				}
            };
			this.$btn.onclick = function() {
				var flag1= reg.test(_this.$phone.value);
                if(flag1){
                    // 发送ajax，验证用户手机号
                    var params = {
                        method: 'post',
                        data: {
                            phone: _this.$phone.value
                        },
                        success: function(data) {
                            data = JSON.parse(data);
                            _this.register(data);
                        }
                    };
                    sendAjax('http://localhost:8081/project/xiaomi/php/register.php', params);
				}else {
                    _this.$error.style.display='block';
                    _this.$errFalse.style.display='block';
                    _this.$phone.className='inp-error';
				}
			};
           //设置国家下拉框
            $(document).ready(function(){
                $(".icon-unie621").click(function(e){
                    $(".country-hidden").toggle();
                    e.stopPropagation();
                })

                $(document).click(function(){
                    $(".country-hidden").hide();
                })

                $(".country-hidden li").click(function(){
                    $(".country-list").text($(this).text());
                    $(".country-hidden").hide();
                })
            });
            //设置电话前缀下拉框
            $(document).ready(function(){
                $(".icon-xiangxia").click(function(e){
                    $(".phone-hidden").toggle();
                    e.stopPropagation();
                });
                $(document).click(function(){
                    $(".phone-hidden").hide();
                });
                $(".phone-hidden li").click(function(){
                    $(".phone-list").text($(this)>$(".recode-code").text());
                    $(".phone-hidden").hide();
                })
            });

		},
		register: function(data) {
			if(data.code == 200) {
				alert('注册成功');
				location.href = 'success.html';
			//document.cookie = "token=" + data.data.token;
			// document.cookie = "user-id=" + data.data.id;
			  }
			 else {
				alert(data.msg);
			 }
		 }
	}
}());