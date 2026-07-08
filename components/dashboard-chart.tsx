"use client";

import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const gridColor = "#33383f";
const axisColor = "#7c8a99";
const lineColor = "#b5714a";
const barColor = "#4c6b57";

export function LineTrendChart({
  data,
  xKey,
  yKey,
}: {
  data: Record<string, string | number>[];
  xKey: string;
  yKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
        <XAxis dataKey={xKey} stroke={axisColor} fontSize={12} />
        <YAxis stroke={axisColor} fontSize={12} />
        <Tooltip contentStyle={{ background: "#1a1d21", border: `1px solid ${gridColor}`, fontSize: 12 }} />
        <Line type="monotone" dataKey={yKey} stroke={lineColor} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarComparisonChart({
  data,
  xKey,
  yKey,
}: {
  data: Record<string, string | number>[];
  xKey: string;
  yKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
        <XAxis dataKey={xKey} stroke={axisColor} fontSize={12} />
        <YAxis stroke={axisColor} fontSize={12} />
        <Tooltip contentStyle={{ background: "#1a1d21", border: `1px solid ${gridColor}`, fontSize: 12 }} />
        <Bar dataKey={yKey} fill={barColor} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
