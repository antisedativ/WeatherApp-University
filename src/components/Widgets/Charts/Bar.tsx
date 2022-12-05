import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import cl from "../Widgets.module.scss";

interface Props {
    data: any
    title: string
    color: string
}

const Bar:React.FC<Props> = ({data, title,color}) => {
    return (
        <div className={cl.chart}>
            <h3>{title}</h3>
            <div style={{height: 300}}>
                <ResponsiveBar
                    data={data}
                    keys={["value"]}
                    indexBy="ranking"
                    margin={{
                        top: 10,
                        right: 40,
                        bottom: 60,
                        left: 40
                    }}
                    padding={0.6}
                    groupMode="grouped"
                    colors={color}
                    axisTop={null}
                    axisRight={null}
                    enableGridX
                    enableGridY
                    enableLabel={false}
                />
            </div>
        </div>
    );
};

export default Bar;