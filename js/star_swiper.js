var swiper = (function () {
    var timer = null;
    return {
        init: function () {
            this.$banner = document.querySelector('.wrapper-list');
            // this.$tipBox = document.querySelector('.banner-tip');
            // this.$tipBoxLiALl = this.$tipBox.querySelectorAll('li');
            this.$prevBtn = document.querySelector('.btn-l');
            this.$nextBtn = document.querySelector('.btn-r');
            this.index = 0;
            for (var i = 0; i < 1; i++) {
                this.$tipBoxLiALl[i].index = i;
            }
            var first = this.$banner.firstElementChild;
            var last = this.$banner.lastElementChild.cloneNode(true);
            this.$banner.appendChild(first.cloneNode(true));
            this.$banner.insertBefore(last, first);
            this.$banner.style.left = '-702';
            this.event();
            // this.autoPlay();
        },
        event: function () {
            var _this = this;
            // this.$tipBox.onclick = function (ev) {
            //     ev = ev || window.event;
            //     var target = ev.target || ev.srcElement;
            //     if (target.nodeName == 'LI') {
            //         _this.showImage(target.index);
            //         _this.autoPlay(target.index);
            //     }
            // };
            this.$prevBtn.onclick = function() {
                _this.showImage(--_this.index);
                // _this.autoPlay(_this.index);
            };
            this.$nextBtn.onclick = function() {
                _this.showImage(++_this.index);
                // _this.autoPlay(_this.index);
            }

        },
        showImage: function (index) {
            if(index > 4) {
                index = 0;
                this.$banner.style.left = 0;
            } else if(index < 0) {
                index = 4;
                this.$banner.style.left = -702 * 6 + 'px'
            }
            this.index = index;
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                this.$tipBoxLiALl[i].removeAttribute('class');
            }
            this.$tipBoxLiALl[index].className = 'active';
            move(this.$banner, 'left', (index + 1) * -702);
        },
        autoPlay:function() {
            clearInterval(timer);
            timer=setInterval (() => {
                this.index++;
            this.showImage(this.index);
        },2000)
        }
    }
}());