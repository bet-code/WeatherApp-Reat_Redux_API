import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={160} width={200} data={props.data}>
                <SparklinesLine color={props.colour}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>avg. {average(props.data)}{props.units}</div>
        </div>
    )
}