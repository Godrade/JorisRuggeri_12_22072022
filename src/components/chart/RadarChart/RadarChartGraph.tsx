import {useEffect, useState} from 'react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';

import {getUserPerformanceAPI} from '../../../service/getPerformance';
import {Performance} from '../../../models/Performance';


export const RadarChartGraph = () => {

    const [stats, setStats] = useState<Performance[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUserPerformanceAPI();
                setStats(data)
            } catch(err){
                console.error('[Performance API] Une erreur est survenue');
            }
        }

        fetchData();

    }, [])
    if (stats.length === 0) return null;

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4">
            <ResponsiveContainer width="100%" height={250} className="bg-gray">
                <RadarChart outerRadius={90} width={730} height={250} data={stats}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="kind" stroke="white"/>
                    <PolarRadiusAxis angle={30}/>
                    <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}