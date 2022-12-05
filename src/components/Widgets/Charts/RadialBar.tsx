import React from 'react';
import cl from "../Widgets.module.scss";
import {ResponsiveRadialBar} from "@nivo/radial-bar";

const RadialBar:React.FC<any> = ({data}) => {
    return (
        <div className={cl.chart}>
            <h3>Air quality</h3>
            <ResponsiveRadialBar
                data={data}
                valueFormat=">-.2f"
                startAngle={-90}
                endAngle={90}
                padding={0.4}
                cornerRadius={2}
                margin={{ top: 25, right: 25, bottom: 0, left: 25 }}
                colors={{ scheme: 'purpleRed_green' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            1
                        ]
                    ]
                }}
                enableTracks={false}
                tracksColor="#242424"
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 8, tickRotation: 0 }}
                label="groupId"
                legends={[]}
            />
        </div>
    );
};

export default RadialBar;