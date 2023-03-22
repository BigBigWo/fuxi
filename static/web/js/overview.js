/**
 * 党建引领
 */
$(document).ready(function(){

    let fullscreen = false;

    var menthod = {
        getFontSize: function (res) {
            const clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
            if (!clientWidth) return;
            let fontSize = clientWidth / 1920;
            console.log(res*fontSize)
            return res*fontSize;
        },
        handleFullScreen : function() {
            let element = document.documentElement;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                // console.log('已还原！');
            } else {    // 否则，进入全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
                // console.log('已全屏！');
            }
            // 改变当前全屏状态
            fullscreen = !fullscreen;
        }
    };

    $("#fullBtn").on("click", menthod.handleFullScreen);



    // 三会一课环形图
    var myChartSh5 = echarts.init(document.getElementById('educationChart'));

    // 学历分布环形图
    var shOption5 = {
        legend: { // 图例设置
            orient: "vertical",
            right: '15%',
            top: 'middle',
            textStyle: {
                color: '#fff',
                lineHeight: 16,
            },

        },
        color: ['#36D8D8' , '#975FE5', '#FF2F20', '#7BDF82', '#FF862D'],
        series: [{	
            type: 'pie',
            right: '55%',
            radius: ['65%', '85%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: '总数(亩)\n 22640',
                lineHeight: 26
            },
            data: [{
                name:"脐　　橙：0人",
                value: 0,
            }, {
                name: "芦　　柑：3人",
                value: 3
            }, {
                name: "香水柠檬：21人",
                value: 21
            }, {
                name: "台湾芭乐：51人",
                value: 51
            }, {
                name: "枇　　杷：51人",
                value: 51
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };
    
    myChartSh5.setOption(shOption5);

    window.addEventListener("resize",function(){
        myChartSh5.resize();
        // myChartSh5.clear();//消除当前实例
        // myChartSh5.setOption(shOption5,true);
    });

});