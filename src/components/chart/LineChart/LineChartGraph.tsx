import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { getUserSessionAPI, SessionAPI } from '../../../service/getSession';
import { LineChartCustomTooltip } from './LineChartCustomToolTip';


export const LineChartGraph = () => {

    const [stats, setStats] = useState<SessionAPI | null>(null)

      useEffect(() => {
        async function fetchData() {
          const data = await getUserSessionAPI();
          setStats(data)
        }
        fetchData();
        
      }, [])
      if (!stats) return null;

      const CustomHover = (props: any) => {
        //console.log('r', points);
        const points = props.points;
    
        return (
          <rect x={points[0].x}  y="5" width="100%" height="100%" fill="rgba(0, 0, 0, 0.1)" />
        );
      };

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4 bg-red">
            <ResponsiveContainer width="100%" height={250} className="bg-red">
            <LineChart width={730} height={250} data={stats.sessions} >
              <rect width="258" height="263" fill="#FF0000" rx="5px" stroke="none" />
              <text y={20} fill="white" opacity={0.7} textAnchor="middle" dominantBaseline="central">
                <tspan x="90" dy="15" fontSize="15px" fontWeight="500">
                  Durée moyenne des
                </tspan>
                <tspan x="54" dy="22" fontSize="15px" fontWeight="500">
                  sessions
                </tspan>
              </text>
                <XAxis dataKey="day" stroke="white" tickFormatter={(value:any, index:number) => {
                  const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
                  return day[value]
                }} />
                <Tooltip content={<LineChartCustomTooltip payload={stats.sessions} active={stats.sessions} />} cursor={<CustomHover />} wrapperStyle={{ outline: 'none' }} />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}