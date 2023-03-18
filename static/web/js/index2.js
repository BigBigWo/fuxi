/**
 * 邻里中心
 */
$(document).ready(function(){

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChartSh5 = echarts.init(document.getElementById('educationChart'));

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
                    color: "rgba(255, 251, 248, 1)"

                }
            }
        },
        yAxis: {
            type: 'category',
            data: ["超市", "便利店", "餐厅", "水果店", "菜市场"],
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
                data: [1, 2, 13, 7, 5],
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
        color: ['#7BDF82','#36D8D8','#FF862D', '#FF2F20', '#975FE5'],
        grid:{
            show:false,
            top:'15%',
            right:'5%',
            bottom:'13%',
            left:'20%'
        },
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 学历分布环形图
    var shOption5 = {
        legend: { // 图例设置
            orient: "vertical",
            right: '20%',
            top: 'middle',
            textStyle: {
                color: '#fff',
                lineHeight: 18,
            },

        },
        color: ['#7BDF82', '#36D8D8' , '#975FE5', '#FF2F20'],
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
                formatter: '总数（所）\n 12',
                lineHeight: 26
            },
            data: [{
                name:"幼  儿  园：2所",
                value: 2,
            }, {
                name: "小　　学：2所",
                value: 2
            }, {
                name: "大　　学：1所",
                value: 1
            }, {
                name: "培训机构：7所",
                value: 7
            }],
            emphasis: {
                disabled: true,
            }
        }]
    };

    myChartSh5.setOption(shOption5);

    window.addEventListener("resize",function(){
        myChart.resize();
        myChartSh5.resize();
    });


    // 随手拍
    var mySwiper = new Swiper ('.swiper', {
        slidesPerView : 2,
        // spaceBetween : 24,

        // loop: true, // 循环模式选项
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })    
});