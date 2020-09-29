import React from 'react'
import CodeMirror from '../component/react-mirror'
import Axios from 'axios';
import './index.css'

class History extends React.Component{

    state={
        value: ''
    }

    componentDidMount () {
        this.getValue()
    }

    getValue = () => {
        Axios.post('http://www.hhhhh.store/add')
            .then(res => {
                console.log(res)
            })
        // Axios.get('https://codingstep.oss-cn-qingdao.aliyuncs.com/codeJava/3/54f8cf06-a599-4c98-9f51-5e850fab4dd7.java')
        //     .then(res => {
        //         this.setState({ value: res.data })
        //     })
        
    }

    render() {
        return (
            <div className="bodyHistory">
                <div className='charts'>
                    <CodeMirror
                        value={this.state.value}
                        options={{
                            mode: 'text/x-java',
                            theme: 'monokai',
                            lineNumbers: true,
                            indentUnit: 0,
                            lockAble: true,
                            lockedLines: [],
                            hintOptions: { completeSingle: false },
                        }}
                    />
                </div>
                {/* <div className="add"></div>
                <div className="heart"></div> */}
            </div>
        );
    }
}

export default History;
