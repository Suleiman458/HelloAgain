'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface MonthlyRevenueChartProps {
  data: { month: string; revenue: number }[]
}

export default function MonthlyRevenueChart({ data }: MonthlyRevenueChartProps) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#64748b" fontSize={14} />
          <YAxis stroke="#64748b" fontSize={14} tickFormatter={(v) => `$${v}`}/>
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar dataKey="revenue" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 