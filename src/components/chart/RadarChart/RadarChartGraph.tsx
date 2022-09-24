import { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

import { getUserPerformanceAPI, Performance } from '../../../service/getPerformance';


export const RadarChartGraph = () => {

    const [stats, setStats] = useState<Performance | null>(null)

      useEffect(() => {
        async function fetchData() {
          const data = await getUserPerformanceAPI();
          setStats(data)
        }
        fetchData();
        
      }, [])
      if (!stats) return null;

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4">
            <ResponsiveContainer width="100%" height={250} className="bg-gray">
                <RadarChart outerRadius={90} width={730} height={250} data={stats.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickFormatter={(value:any, index:number) => stats.kind[value]}/>
                    <PolarRadiusAxis angle={30} />
                    <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}