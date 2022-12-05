import React from 'react';
import cl from "../Widgets.module.scss";
import {ResponsiveBump} from "@nivo/bump";

const Bump:React.FC<any> = ({data}) => {
    return (
        <div className={cl.chart}>
            <h3>Temperature for 5 days</h3>
            <div style={{height: 270}}>
                <ResponsiveBump
                    data={data}
                    colors={{ scheme: 'pink_yellowGreen' }}
                    lineWidth={3}
                    inactiveLineWidth={5}
                    inactiveOpacity={0.15}
                    endLabel={false}
                    pointSize={7}
                    activePointSize={10}
                    inactivePointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={3}
                    activePointBorderWidth={3}
                    pointBorderColor={{ from: 'serie.color' }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    margin={{ top: 0, right: 30, bottom: 35, left: 30 }}
                    axisRight={null}
                />
            </div>
        </div>
    );
};

export default Bump;