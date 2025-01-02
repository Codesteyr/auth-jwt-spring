import * as React from 'react';

import { request } from '../axios_helper';

export default class AuthContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        request('get', '/messages', {}).then((response) => {
            console.log(response.data);
            this.setState({ data: response.data });
        }).catch((error) => {
            console.error("API error:", error);
        });
    };

    render() {
        return (
            <div className='row justify-content-md-center'>
                <div className='col-4'>
                    <div className='card' style={{ width: '18rem' }}>
                        <div className='card-body'>
                            <h5 className='card-title'> Backend response</h5>
                            <p className='card-text'>Content:</p>
                            <ul className='content'>
                                {Array.isArray(this.state.data) && this.state.data.map((line, index) => (
                                    <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>           
        );
    }
}