$(document).ready(function(){

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据--条形图
    option = {
        title: {
            text: '截止2023年2月21日&nbsp党员总数为27人',
            left:'2%',
            top:'8%',
            textStyle: {
                fontSize: 12,
                color:'#FFFFFF'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisTick: false,
            show: true,
            splitLine:{
                show:true
            },
            textStyle:{
                fontSize:'12'
            },
            offset:2,
            axisLine:{
                lineStyle: {
                    color: "rgba(255, 251, 248, 1)"
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ["小于5年","5年至10年","10年至20年","20年以上"],
            show: true,
            axisTick: false,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255, 251, 248, 1)"
                }
            },
            offset:2,
            nameTextStyle: {
                color:'#FFFFFF'
            }
        },
        series:[
            {
                name: '2012',
                type: 'bar',
                barWidth:'30%',
                data: [10, 8, 19, 38],
                itemStyle: {
                    normal: {
                        label: {
                          show: true,
                          position: 'right', //数值在上方显示
                        }
                    }
                }
            }
        ],
        // z柱状图颜色设置
        itemStyle:{
            normal:{
            barBorderRadius: 5,
                color:function(params){
                    var colorList=['#7BDF82','#36D8D8','#FF862D', '#FF2F20'];
                    return colorList[params.dataIndex];
                }
            }
        },
        grid:{
            show:false,
            top:'25%',
            right:'26%',
            bottom:'10%',
            left:'20%'
        },
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

});