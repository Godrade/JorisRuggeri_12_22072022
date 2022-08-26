export const BarChartCustomTooltip = ({ active, payload }) => {
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