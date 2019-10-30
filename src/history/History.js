import React from 'react';
import './History.css';
import ECharts from 'echarts-for-react';
import backImg from './back.png';
import { Link } from 'react-router-dom'

const Option = {
title : {
    text: '温度湿度变化图',
    x: 'center',
    align: 'right'
},
grid: {
    bottom: 80
},
toolbox: {
    feature: {
        dataZoom: {
            yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
    }
},
tooltip : {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        animation: false,
        label: {
            backgroundColor: '#505765'
        }
    }
},
legend: {
    data:['温度','湿度'],
    x: 'left'
},
dataZoom: [
    {
        show: true,
        realtime: true,
        start: 0,
        end: 100
    },
    {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100
    }
],
xAxis : [
    {
        type : 'category',
        boundaryGap : false,
        axisLine: {onZero: false},
        data : [
            '2019/10/26 0:00', '2019/10/26 1:00', '2019/10/26 2:00', '2019/10/26 3:00', '2019/10/26 4:00', '2019/10/26 5:00', '2019/10/26 6:00', '2019/10/26 7:00', '2019/10/26 8:00', '2019/10/26 9:00', '2019/10/26 10:00', '2019/10/26 11:00', '2019/10/26 12:00', '2019/10/26 13:00', '2019/10/26 14:00', '2019/10/26 15:00', '2019/10/26 16:00', '2019/10/26 17:00', '2019/10/26 18:00', '2019/10/26 19:00', '2019/10/26 20:00', '2019/10/26 21:00', '2019/10/26 22:00', '2019/10/26 23:00',
            '2019/10/27 0:00', '2019/10/27 1:00', '2019/10/27 2:00', '2019/10/27 3:00', '2019/10/27 4:00', '2019/10/27 5:00', '2019/10/27 6:00', '2019/10/27 7:00', '2019/10/27 8:00', '2019/10/27 9:00', '2019/10/27 10:00', '2019/10/27 11:00', '2019/10/27 12:00', '2019/10/27 13:00', '2019/10/27 14:00', '2019/10/27 15:00', '2019/10/27 16:00', '2019/10/27 17:00', '2019/10/27 18:00', '2019/10/27 19:00', '2019/10/27 20:00', '2019/10/27 21:00', '2019/10/27 22:00', '2019/10/27 23:00',
            '2019/10/28 0:00', '2019/10/28 1:00', '2019/10/28 2:00', '2019/10/28 3:00', '2019/10/28 4:00', '2019/10/28 5:00', '2019/10/28 6:00', '2019/10/28 7:00', '2019/10/28 8:00', '2019/10/28 9:00', '2019/10/28 10:00', '2019/10/28 11:00', '2019/10/28 12:00', '2019/10/28 13:00', '2019/10/28 14:00', '2019/10/28 15:00', '2019/10/28 16:00', '2019/10/28 17:00', '2019/10/28 18:00', '2019/10/28 19:00', '2019/10/28 20:00', '2019/10/28 21:00', '2019/10/28 22:00', '2019/10/28 23:00'
        ].map(function (str) {
            return str.replace(' ', '\n')
        })
    }
],
yAxis: [
    {
        name: '温度(摄氏度)',
        type: 'value',
        max: 50
    },
    {
        name: '湿度(%)',
        nameLocation: 'start',
        max: 100,
        type: 'value',
        inverse: true
    }
],
series: [
    {
        name:'温度',
        type:'line',
        animation: false,
        areaStyle: {
        },
        lineStyle: {
            width: 1
        },
        data:[
            11, 10, 9, 7, 8, 9, 10, 11, 12, 15, 17, 18, 20, 21, 23, 22, 21, 20, 18, 17, 16, 15, 14, 13,
            11, 10, 9, 7, 8, 9, 10, 11, 12, 15, 17, 18, 20, 21, 23, 22, 21, 20, 18, 17, 16, 15, 14, 13,
            11, 10, 9, 7, 8, 9, 10, 11, 12, 15, 17, 18, 20, 21, 23, 22, 21, 20, 18, 17, 16, 15, 14, 13
        ]
    },
    {
        name:'湿度',
        type:'line',
        yAxisIndex:1,
        animation: false,
        areaStyle: {
        },
        lineStyle: {
            width: 1
        },
        data: [
            51, 53, 52, 64, 64, 75, 80, 100, 98, 97, 94, 94, 85, 93, 51, 51, 47, 56, 76, 95, 93, 90, 87, 84,
            51, 53, 52, 64, 64, 75, 80, 100, 98, 97, 94, 94, 85, 93, 51, 51, 47, 56, 76, 95, 93, 90, 87, 84,
            51, 53, 52, 64, 64, 75, 80, 100, 98, 97, 94, 94, 85, 93, 51, 51, 47, 56, 76, 95, 93, 90, 87, 84
        ]
    }
]
}

class History extends React.Component{
    render() {
        return (
            <div className="bodyHistory">
                <div className='header'>
                    <div className='back'>
                        <img style={{ position: 'relative', height: '100%', width: '100%' }} src={backImg} alt='' />
                        <Link className='linkMask' to='../detail' />
                    </div>
                </div>
                <div className='charts'>
                    <ECharts option={Option} />
                </div>
            </div>
        );
    }
}

export default History;
