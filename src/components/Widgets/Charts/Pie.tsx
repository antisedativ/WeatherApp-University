import React from 'react';
import cl from "../Widgets.module.scss";
import {ResponsivePie} from "@nivo/pie";

const Pie:React.FC<any> = ({data}) => {
    return (
        <div className={cl.chart}>
            <h3>UV Index</h3>
            <div style={{height: 300}}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 5, right: 30, bottom: 40, left: 30 }}
                    valueFormat=" >+"
                    innerRadius={0.6}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'pink_yellowGreen' }}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    enableArcLinkLabels={false}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#ffffff"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#110909"
                    legends={[
                        {
                            anchor: 'center',
                            direction: 'column',
                            justify: false,
                            translateX: 0,
                            translateY: 0,
                            itemWidth: 60,
                            itemHeight: 20,
                            itemsSpacing: 0,
                            symbolSize: 20,
                            itemDirection: 'left-to-right'
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default Pie;