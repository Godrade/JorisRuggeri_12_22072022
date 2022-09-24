import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { getUserSessionAPI, Session } from '../../../service/getSession';
import { LineChartCustomTooltip } from './LineChartCustomToolTip';


export const LineChartGraph = () => {

    const [stats, setStats] = useState<Session | null>(null)

      useEffect(() => {
        async function fetchData() {
          const data = await getUserSessionAPI();
          setStats(data)
        }
        fetchData();
        
      }, [])
      if (!stats) return null;

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4 bg-red">
            <ResponsiveContainer width="100%" height={250} className="bg-red">
            <LineChart width={730} height={250} data={stats.sessions} >
                <XAxis dataKey="day" stroke="white" tickFormatter={(value:any, index:number) => {
                  const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
                  return day[value]
                }} />
                <Tooltip content={<LineChartCustomTooltip payload={stats.sessions} active={stats.sessions} />} />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}