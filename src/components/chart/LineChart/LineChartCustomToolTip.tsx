export const LineChartCustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {            
    return (
      <div className="custom-tooltip-linebar">
        <p className="label">{payload[0].payload.sessionLength} min</p>
      </div>
    );
  }

  return null;
};