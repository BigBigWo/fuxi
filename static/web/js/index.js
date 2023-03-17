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

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据--条形图
    option = {
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisTick: false,
            axisLabel: {
                show: true, //显示坐标轴上的文字
                fontSize: 12,
                color: '#B9BFC8'
            },
            splitLine:{
                show:true,
                lineStyle:{ 
                    type: "solid", //实线
                    shadowColor: "#B9BFC8",  // 透明度颜色
                    opacity: 0.1, //透明度
                    width: 1, 
                    type: 'solid',
                
                }
            },
            offset:2,
            axisLine:{
                show: true,
                lineStyle: {
                    color: "#B9BFC8"

                }
            }
        },
        yAxis: {
            type: 'category',
            data: ["小于5年","5年至10年","10年至20年","20年以上"],
            axisTick: false,
            offset:2,
            axisLabel: {
                show: true, //显示坐标轴上的文字
                fontSize: 12,
                color: '#B9BFC8'
            },
            splitLine:{
                show:false,
            },
            axisLine:{
                show: false,
                lineStyle: {
                    color: "rgba(255, 251, 248, 1)"
                }
            },
            nameTextStyle: {
                color:'#FFFFFF'
            }
        },
        series:[
            {
                name: '2012',
                type: 'bar',
                colorBy: 'data',
                barWidth:'30%',
                data: [10, 8, 19, 38],
                itemStyle: {
                    normal: {
                        label: {
                        show: true,
                        position: 'right',  //数值在上方显示
                        textStyle:{
                            color:'auto'
                        }
                           
                        }
                    }
                }
            }
        ],
        color: ['#7BDF82','#36D8D8','#FF862D', '#FF2F20'],
        grid:{
            show:false,
            top:'20%',
            right:'8%',
            bottom:'13%',
            left:'1%',
            containLabel: true
        },
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    // 三会一课环形图
    var myChartSh1 = echarts.init(document.getElementById('sh-bz1'));
    var myChartSh2 = echarts.init(document.getElementById('sh-bz2'));
    var myChartSh3 = echarts.init(document.getElementById('sh-bz3'));
    var myChartSh4 = echarts.init(document.getElementById('sh-bz4'));
    var myChartSh5 = echarts.init(document.getElementById('educationChart'));

    var showText = '';
    var shOption1 = {
        color: ['#36D8D8' , '#44546B'],
        series: [{	
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: (params) => {
                    if(params.dataIndex == 0) {
                        showText =  Math.round(params.percent) + '%';
                    }
                    return showText;
                },
            },
            data: [{
                value: 6,
            }, {
                value: 22 - 6
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };

    var shOption2 = {
        color: ['#FF2F20' , '#44546B'],
        series: [{	
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: (params) => {
                    if(params.dataIndex == 0) {
                        showText =  Math.round(params.percent) + '%';
                    }
                    return showText;
                },
            },
            data: [{
                value: 13,
            }, {
                value: 22 - 13
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };


    var shOption3 = {
        color: ['#7BDF82' , '#44546B'],
        series: [{	
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: (params) => {
                    if(params.dataIndex == 0) {
                        showText = Math.round(params.percent) + '%';
                    }
                    return showText;
                },
            },
            data: [{
                value: 0,
            }, {
                value: 22 - 0
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };

    var shOption4 = {
        color: ['#FF862D' , '#44546B'],
        series: [{	
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: (params) => {
                    if(params.dataIndex == 0) {
                        showText =  Math.round(params.percent) + '%';
                    }
                    return showText;
                },
            },
            data: [{
                value: 3,
            }, {
                value: 22 - 3
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };

    // 学历分布环形图
    var shOption5 = {
        legend: { // 图例设置
            orient: "vertical",
            right: '20%',
            top: 'middle',
            textStyle: {
                color: '#fff',
                lineHeight: 16,
            },

        },
        color: ['#36D8D8' , '#975FE5', '#FF2F20', '#7BDF82'],
        series: [{	
            type: 'pie',
            right: '55%',
            radius: ['70%', '95%'],
            label: {
                show: true,
                position: 'center',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#fff',
                formatter: '总数（人）\n 75',
                lineHeight: 26
            },
            data: [{
                name:"本科以上：1人",
                value: 1,
            }, {
                name: "本科：3人",
                value: 3
            }, {
                name: "大专：20人",
                value: 20
            }, {
                name: "大专以下：51人",
                value: 51
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };
    
    myChartSh1.setOption(shOption1);
    myChartSh2.setOption(shOption2);
    myChartSh3.setOption(shOption3);
    myChartSh4.setOption(shOption4);
    myChartSh5.setOption(shOption5);

    window.addEventListener("resize",function(){
        console.log(111)
        myChart.resize();
        myChartSh1.resize();
        myChartSh2.resize();
        myChartSh3.resize();
        myChartSh4.resize();
        myChartSh5.resize();
        // myChartSh5.clear();//消除当前实例
        // myChartSh5.setOption(shOption5,true);
    });

    // var mySwiper = new Swiper ('.swiper', {
    //     // loop: true, // 循环模式选项
    //     // 如果需要分页器
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     // },
        
    //     // 如果需要前进后退按钮
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // })     

});