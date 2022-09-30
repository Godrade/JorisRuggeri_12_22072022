import propTypes from 'prop-types';
import {Legend, ResponsiveContainer, PieChart, Pie} from 'recharts';

export const PieChartGraph = ({todayScore}) => {
    const scoreData = [
        {name: 'completed', value: todayScore, fill: 'red'},
        {name: 'not-completed', value: 1 - todayScore, fill: 'transparent'}
    ];

    const CustomLegend = ({payload}: { payload: any }) => (
        <div className="custom-legend-pie">
            <p>
                <span className="score-number">{payload[0].payload.value * 100}%</span>
                de votre objectif
            </p>
        </div>
    );

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4">
            <ResponsiveContainer width="100%" height="100%" className="bg-gray-light">
                <PieChart>
                    <text x="15%" y="10%" fill="#20253A" textAnchor="middle" dominantBaseline="central">
                        <tspan fontSize="15px" fontWeight="600">
                            Score
                        </tspan>
                    </text>
                    <Pie data={scoreData} cx="50%" cy="50%" startAngle={90} endAngle={500} innerRadius={65}
                         outerRadius={75} paddingAngle={5} cornerRadius={50} dataKey="value"/>
                    <Legend layout="horizontal" align="center" verticalAlign="middle"
                            content={<CustomLegend payload={null}/>}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

PieChartGraph.propTypes = {
    todayScore: propTypes.number,
};