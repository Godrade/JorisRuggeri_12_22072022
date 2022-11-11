import {useEffect, useState} from 'react';
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer} from 'recharts';

import {getUserActivityAPI} from '../../../service/getActivity';
import {Activity} from '../../../models/Activity';
import { toast } from 'react-toastify';

export const BarChartGraph = () => {

    const [stats, setStats] = useState<Activity[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUserActivityAPI();
                setStats(data)
            } catch(err){
                toast.error('[Activity API] Une erreur est survenue');
            }

        }

        fetchData();

    }, [])
    if (stats.length === 0) return null;

    const BarChartCustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{payload[0].payload.kilogram}kg</p>
                    <p className="label">{payload[0].payload.calories}Kcal</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="col-12">
            <div className="bar-graph">
                <div className="graph-1">
                    <p id="bar-title">Activité quotidienne</p>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart height={250} data={stats}>
                            <XAxis dataKey="day"/>
                            <YAxis orientation="right"/>
                            <Legend verticalAlign="top" align="right"/>
                            <Tooltip content={<BarChartCustomTooltip payload={stats} active={stats}/>}
                                     wrapperStyle={{outline: 'none'}}/>
                            <CartesianGrid stroke="#ddd" vertical={false}/>
                            <Bar dataKey="kilogram" barSize={7} minPointSize={0} legendType="circle" fill="#282D30"
                                 radius={[3, 3, 0, 0]}/>
                            <Bar dataKey="calories" barSize={7} minPointSize={0} legendType="circle" fill="#E60000"
                                 radius={[3, 3, 0, 0]}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}