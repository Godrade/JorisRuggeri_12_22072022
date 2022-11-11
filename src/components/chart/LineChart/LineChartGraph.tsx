import {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {Session} from '../../../models/Session';

import {getUserSessionAPI} from '../../../service/getSession';

export const LineChartGraph = () => {

    const [stats, setStats] = useState<Session[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUserSessionAPI();
            setStats(data);
            } catch(err){
                toast.error('[Session API] Une erreur est survenue');
            }
        }

        fetchData();

    }, [])
    if (stats.length === 0) return null;

    const CustomHover = (props: any) => {
        const points = props.points;

        return (
            <rect x={points[0].x} y="5" width="100%" height="100%" fill="rgba(0, 0, 0, 0.1)"/>
        );
    };

    const LineChartCustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-linebar">
                    <p className="label">{payload[0].payload.sessionLength} min</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4 bg-red">
            <ResponsiveContainer width="100%" height={250} className="bg-red">
                <LineChart width={730} height={250} data={stats}>
                    <rect width="258" height="263" fill="#FF0000" rx="5px" stroke="none"/>
                    <text y={20} fill="white" opacity={0.7} textAnchor="middle" dominantBaseline="central">
                        <tspan x="90" dy="15" fontSize="15px" fontWeight="500">Durée moyenne des</tspan>
                        <tspan x="54" dy="22" fontSize="15px" fontWeight="500">sessions</tspan>
                    </text>
                    <XAxis dataKey="day" stroke="white"/>
                    <Tooltip content={<LineChartCustomTooltip payload={stats} active={stats}/>} cursor={<CustomHover/>}
                             wrapperStyle={{outline: 'none'}}/>
                    <Line type="monotone" dataKey="sessionLength" stroke="white"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}