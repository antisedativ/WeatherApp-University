import React from 'react';
import cl from './Widgets.module.scss'
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { ResponsiveBump } from '@nivo/bump'
import { ResponsivePie } from '@nivo/pie'
import {useCustomSelector} from "../../hooks/storeHooks";
import DateConverter from "../../model/DateConverter";

const Widgets = () => {

    const {forecast} = useCustomSelector(state => state.currentWeatherSliceReducer.weather)
    console.log(forecast.forecastday)
    const weather = forecast.forecastday

    // getting data for charts
    const BumpData = []
    const RadialBarData = []
    const PieData = []
    for (let i = 1; i < weather.length; i++) {
        BumpData.push(
            {
                "id": DateConverter(weather[i].date),
                "data": [
                    {
                        "x": '03:00',
                        "y": Math.ceil(weather[i].hour[3].temp_c)
                    },
                    {
                        "x": '09:00',
                        "y": Math.ceil(weather[i].hour[9].temp_c)
                    },
                    {
                        "x": '15:00',
                        "y": Math.ceil(weather[i].hour[15].temp_c)
                    },
                    {
                        "x": '21:00',
                        "y": Math.ceil(weather[i].hour[21].temp_c)
                    },
                ]
            },
        )
        PieData.push(
            {
                "id": DateConverter(weather[i].date),
                "label": DateConverter(weather[i].date),
                "value": weather[i].day.uv,
                "color": `hsl(${56+i*10}, 70%, 50%)`
            }
        )
    }
    for (let i = 0; i < weather.length-2; i++) {
        RadialBarData.push(
            {
                "id": DateConverter(weather[i].date),
                "data": [
                    {
                        "x": "CO",
                        "y": Math.ceil(weather[i].day.air_quality.co)
                    },
                    {
                        "x": "NO2",
                        "y": Math.ceil(weather[i].day.air_quality.no2)
                    },
                    {
                        "x": "SO2",
                        "y": Math.ceil(weather[i].day.air_quality.so2)
                    }
                ]
            }
        )
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.chart}>
                <h3>Air quality</h3>
                <ResponsiveRadialBar
                    data={RadialBarData}
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
                    circularAxisOuter={{ tickSize: 5, tickPadding: 8, tickRotation: 0 }}
                    label="groupId"
                    legends={[]}
                />
            </div>
            <div className={cl.chart}>
                <h3>Temperature for 5 days</h3>
                <div style={{height: 270}}>
                    <ResponsiveBump
                        data={BumpData}
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
            <div className={cl.chart}>
                <h3>UV Index</h3>
                <div style={{height: 300}}>
                    <ResponsivePie
                        data={PieData}
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