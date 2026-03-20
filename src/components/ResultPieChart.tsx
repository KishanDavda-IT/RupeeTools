'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface ResultPieChartProps {
  data: ChartData[];
  colors?: string[];
}

const COLORS = ['#1a56db', '#ff6b35', '#10b981', '#8b5cf6', '#f59e0b'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ResultPieChart({ data, colors = COLORS }: ResultPieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          innerRadius={50}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: any) =>
            new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(Number(value))
          }
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
