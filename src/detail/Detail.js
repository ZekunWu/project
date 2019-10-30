import React from 'react';
import ECharts from 'echarts-for-react';
import './Detail.css';
import backImg from './back.png'
import hisImg from './history.png'
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
            51, 53, 52, 64, 64, 75, 80, 100, 98, 97, 94, 94, 85, 93, 51, 51, 47, 56, 76, 95, 93, 90, 87, 84
        ]
    }
]
}

class Detail extends React.Component{
    render() {
        return (
            <div className="bodyDetail">
                <div className='header'>
                    <div className='back'>
                        <img style={{ position: 'relative', height: '100%', width: '100%' }} src={backImg} alt='' />
                        <Link className='linkMask' to='../info' />
                    </div>
                </div>
                <div className='charts'>
                    <ECharts option={Option} />
                </div>
                <div className='his'>
                    <div className='history'>
                        <img style={{ position: 'relative', height: 'auto', width: '50px', marginLeft: '75px'}} src={hisImg} alt='' />
                        <Link className='linkMask' to='../history' />
                        <p style={{marginTop: '0', fontSize: '14px', color: 'grey'}} align='center'>查看过去三天历史</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
