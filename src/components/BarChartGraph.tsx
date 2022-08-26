import { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import { BarChartCustomTooltip } from './BarChartCustomToolTip';

export const BarChartGraph = () => {

    const [getStats, setStats] = useState()
      
      useEffect(() => {
        const callAPI = async () => {
            const response = await fetch('http://localhost:3000/user/12/activity').then((response) => {
                return response.json()
            });

            setStats(response['data']['sessions']);
        }
        callAPI();        
      }, [getStats])

    return (
        <section className="bar-graph">
            <div className="graph-1">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart height={250} data={getStats}>
                    <XAxis dataKey="day" />
                    <YAxis orientation="right" />
                    <Legend verticalAlign="top" align="right"  />
                    <Tooltip content={<BarChartCustomTooltip payload={getStats} active={getStats} />} />
                    <CartesianGrid stroke="#ddd" vertical={false} />
                    <Bar dataKey="kilogram" barSize={7} minPointSize={0} legendType="circle" fill="#282D30" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" barSize={7} minPointSize={0} legendType="circle" fill="#E60000" radius={[3, 3, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}