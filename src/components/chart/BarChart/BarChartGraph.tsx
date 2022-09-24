import { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import { BarChartCustomTooltip } from './BarChartCustomToolTip';

import { Activity, getUserActivityAPI } from '../../../service/getActivity';
import { getByDisplayValue } from '@testing-library/react';

export const BarChartGraph = () => {

    const [stats, setStats] = useState<Activity | null>(null)

      useEffect(() => {
        async function fetchData() {
          const data = await getUserActivityAPI();
          setStats(data)
          
        }
        fetchData();
        
      }, [])
      if (!stats) return null;

    return (
        <div className="col-12">
            <div className="bar-graph">
                <div className="graph-1">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart height={250} data={stats.sessions}>
                        <XAxis dataKey="day" tickFormatter={(value:any, index:number) => {
                          const day = new Date(value);
                          console.log(value);
                          
                          return String(day.getDate());
                        }} />
                        <YAxis orientation="right" />
                        <Legend verticalAlign="top" align="right"  />
                        <Tooltip content={<BarChartCustomTooltip payload={stats} active={stats} />} />
                        <CartesianGrid stroke="#ddd" vertical={false} />
                        <Bar dataKey="kilogram" barSize={7} minPointSize={0} legendType="circle" fill="#282D30" radius={[3, 3, 0, 0]} />
                        <Bar dataKey="calories" barSize={7} minPointSize={0} legendType="circle" fill="#E60000" radius={[3, 3, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}