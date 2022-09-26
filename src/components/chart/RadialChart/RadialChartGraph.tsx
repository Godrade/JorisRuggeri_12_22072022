import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';

export const RadialChartGraph = ({ user }) => {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-4 col-xxl-4">
            <ResponsiveContainer width="100%" height={250} className="bg-gray-light">
              <RadialBarChart 
                  width={730} 
                  height={250}
                  innerRadius={50}
                  outerRadius={140}
                  barSize={10}
                  data={[{name: 'score', value: user.todayScore * 100, fill: "#E60000"}]} 
                >
                   {/* @ts-ignore */}
                  <RadialBar minAngle={15} label={{ fill: 'white', position: 'insideStart' }} background='white' clockWise dataKey='value' />
                  <Legend iconSize={10} width={130} height={140} layout='vertical' verticalAlign='middle' align="right" />
                  <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}