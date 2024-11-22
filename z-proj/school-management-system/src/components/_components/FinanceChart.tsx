"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IoIosMore } from "react-icons/io";
const chartData = [
  { month: "January", Expenses: 186, Income: 80 },
  { month: "February", Expenses: 305, Income: 200 },
  { month: "March", Expenses: 237, Income: 120 },
  { month: "April", Expenses: 73, Income: 190 },
  { month: "May", Expenses: 209, Income: 130 },
  { month: "June", Expenses: 214, Income: 140 },
];

const chartConfig = {
  Expenses: {
    label: "Expenses",
    color: "hsl(var(--purple-primary))",
  },
  Income: {
    label: "Income",
    color: "hsl(var(--primary-yellow))",
  },
} satisfies ChartConfig;

export function FinanceChart() {
  return (
    <Card className="bg-brownBackground ">
      <CardHeader className="items-center p-4 pb-0 flex flex-row justify-between ">
        <CardTitle>Finance</CardTitle>
        <CardDescription>
          <IoIosMore size={25} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            height={400}
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={2}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="Expenses"
              type="monotone"
              stroke="var(--color-Expenses)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Income"
              type="monotone"
              stroke="var(--color-Income)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
