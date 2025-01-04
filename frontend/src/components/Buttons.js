import * as React from 'react';

export default function Buttons (props) {
    return(
        <div className='row justify-content-center'>
            <div className='col-4'>
                <div className='btn-group' role='group' aria-label='Basic example' style={{ margin: '20px' }}>
                    <button type='button' className='btn btn-primary' style={{ margin: '10px' }} onClick={props.login}>Login</button>
                    <button type='button' className='btn btn-dark' style={{ margin: '10px' }} onClick={props.logout}>Logout</button>
                </div>
            </div>
        </div> 
    );
};