import React from 'react';

export const WithUseParams = ({children}: any) => {
    const RRR = children

    console.log(RRR.props)
    return <div>
        {RRR}
    </div>


}