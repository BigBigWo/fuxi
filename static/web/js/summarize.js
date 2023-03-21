$(document).ready(function(){

    // 土地基本情况饼状图
    var myChart = echarts.init(document.getElementById('tudi'));

    // 人口年龄统计环形图
    var myChartSh5 = echarts.init(document.getElementById('ageChart'));
    
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item'
          },
        legend: {
          show:true,
          orient: 'vertical',
          left: 'right',
          align:"left",
          top:"45%",
          left: "53%",
          width:500,
          height:80,
          textStyle: {
            color: "#FFFFFF"
          },
          
        },
        color:['#36D8D8','#3690EE'],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ["0", "75%"],
            center: ["25%", "60%"],
            label: {
                show: false,
              },
            data: [
              { value: 1023,  name:'耕   地：1041亩' },
              { value: 3432,   name:'山   地：2366亩' },
            ],
          
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                fontStyle: "normal"

              }
            },
            labelLine: {
                show: false
              },
          }
        ]
    };

    // 学历分布环形图
    var shOption5 = {
        legend: { // 图例设置
            orient: "vertical",
            right: '15%',
            top: 'middle',
            textStyle: {
                color: '#fff',
                lineHeight: 18,
            },
        },
        color: ['#36D8D8', '#975FE5' , '#FF2F20', '#7BDF82', '#3690EE', '#FF862D'],
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
                formatter: '总数（人）\n 6255',
                lineHeight: 26
            },
            data: [{
                    name:"0 - 6岁：865人",
                    value: 865,
                  }, {
                    name:"7 - 17岁：966人",
                    value: 966,
                  }, {
                    name:"18 - 30岁：1521人",
                    value: 1521,
                  }, {
                    name:"30 - 45岁：1204人",
                    value: 1204,
                  }, {
                    name:"45 - 60岁：1093人",
                    value: 1093,
                  }],
            emphasis: {
                disabled: true,
            }
        }]
    };

    myChartSh5.setOption(shOption5);

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.addEventListener("resize",function(){ 
        myChart.resize();
        myChartSh5.resize();
    });

    var mySwiper = new Swiper('#swiper-container1',{
        slidesPerView: 1,
        //  spaceBetween : 20,
        // loop: true,
        navigation: {
          nextEl: '#swiper-container1 .swiper-button-next',
          prevEl: '#swiper-container1 .swiper-button-prev',
        },
    });

});





