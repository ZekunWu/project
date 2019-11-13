import React from 'react';
import axios from 'axios';
import './History.css';
import ECharts from 'echarts-for-react';
import backImg from './back.png';
import { Link } from 'react-router-dom'

class History extends React.Component{

    state={
        timeArray: [],
        temperArray: [],
        humidArray: []
    }

    componentDidMount() {
        axios.post('http://localhost:8080/history')
        .then(res => {
            // console.log(res)
            this.setState({
                timeArray: res.data.oj.times,
                temperArray: res.data.oj.tems,
                humidArray: res.data.oj.hums
            })
        })
    }

    render() {
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
                    data : this.state.timeArray.map(function (str) {
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
                    data:this.state.temperArray
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
                    data: this.state.humidArray
                }
            ]
            }
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
