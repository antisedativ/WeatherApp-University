import React from 'react';
import cl from './Widgets.module.scss'
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { ResponsiveBump } from '@nivo/bump'
import { ResponsivePie } from '@nivo/pie'

const Widgets = () => {

    let data1 = [
        {
            "id": "Supermarket",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 133
                },
                {
                    "x": "Fruits",
                    "y": 281
                },
                {
                    "x": "Meat",
                    "y": 117
                }
            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 159
                },
                {
                    "x": "Fruits",
                    "y": 193
                },
                {
                    "x": "Meat",
                    "y": 174
                }
            ]
        },
        {
            "id": "Online",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 251
                },
                {
                    "x": "Fruits",
                    "y": 297
                },
                {
                    "x": "Meat",
                    "y": 174
                }
            ]
        },
        {
            "id": "Marché",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 39
                },
                {
                    "x": "Fruits",
                    "y": 198
                },
                {
                    "x": "Meat",
                    "y": 143
                }
            ]
        }
    ]
    let data2 = [
        {
            "id": "hack",
            "label": "hack",
            "value": 568,
            "color": "hsl(76, 70%, 50%)"
        },
        {
            "id": "make",
            "label": "make",
            "value": 43,
            "color": "hsl(172, 70%, 50%)"
        },
        {
            "id": "scala",
            "label": "scala",
            "value": 433,
            "color": "hsl(283, 70%, 50%)"
        },
        {
            "id": "ruby",
            "label": "ruby",
            "value": 594,
            "color": "hsl(275, 70%, 50%)"
        },
        {
            "id": "elixir",
            "label": "elixir",
            "value": 130,
            "color": "hsl(86, 70%, 50%)"
        }
    ]
    let data3 = [
        {
            "id": "Serie 1",
            "data": [
                {
                    "x": 2000,
                    "y": 1
                },
                {
                    "x": 2001,
                    "y": 6
                },
                {
                    "x": 2002,
                    "y": 4
                },
                {
                    "x": 2003,
                    "y": 2
                },
                {
                    "x": 2004,
                    "y": 6
                }
            ]
        },
        {
            "id": "Serie 2",
            "data": [
                {
                    "x": 2000,
                    "y": 2
                },
                {
                    "x": 2001,
                    "y": 4
                },
                {
                    "x": 2002,
                    "y": 5
                },
                {
                    "x": 2003,
                    "y": 2
                },
                {
                    "x": 2004,
                    "y": 7
                }
            ]
        },
        {
            "id": "Serie 3",
            "data": [
                {
                    "x": 2000,
                    "y": 7
                },
                {
                    "x": 2001,
                    "y": 1
                },
                {
                    "x": 2002,
                    "y": 2
                },
                {
                    "x": 2003,
                    "y": 3
                },
                {
                    "x": 2004,
                    "y": 2
                }
            ]
        }
    ]

    return (
        <div className={cl.wrapper}>
            <div className={cl.chart}>
                <h3>Weather stats</h3>
                <ResponsiveRadialBar
                    data={data1}
                    valueFormat=">-.2f"
                    startAngle={-90}
                    endAngle={90}
                    padding={0.4}
                    cornerRadius={2}
                    margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
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
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                    label="groupId"
                    legends={[]}
                />
            </div>
            <div className={cl.chart}>
                <h3>UV Index</h3>
                <div style={{height: 270}}>
                    <ResponsiveBump
                        data={data3}
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
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'ranking',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        margin={{ top: 0, right: 30, bottom: 35, left: 30 }}
                        axisRight={null}
                    />
                </div>
            </div>
            <div className={cl.chart}>
                <h3>Pie</h3>
                <div style={{height: 300}}>
                    <ResponsivePie
                        data={data2}
                        margin={{ top: 10, right: 30, bottom: 20, left: 30 }}
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
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'ruby'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'python'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'scala'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'lisp'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'elixir'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'javascript'
                                },
                                id: 'lines'
                            }
                        ]}
                        legends={[
                            {
                                anchor: 'center',
                                direction: 'column',
                                justify: false,
                                translateX: 0,
                                translateY: 0,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemsSpacing: 0,
                                symbolSize: 20,
                                itemDirection: 'left-to-right'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Widgets;