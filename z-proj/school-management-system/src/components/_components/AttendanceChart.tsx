"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "Mon", boys: 186, girls: 80 },
  { month: "Tue", boys: 305, girls: 200 },
  { month: "Wed", boys: 237, girls: 120 },
  { month: "Thu", boys: 73, girls: 190 },
  { month: "Fri", boys: 209, girls: 130 },
  { month: "Sat", boys: 214, girls: 140 },
  { month: "Sun", boys: 214, girls: 140 },
];

const chartConfig = {
  boys: {
    label: "Boys",
    color: "hsl(var(--chart-1))",
  },
  girls: {
    label: "Girls",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AttendanceChart() {
  return (
    <Card className=" bg-brownBackground max-w-full responsive:h-[375px]">
      <CardHeader className="items-center p-4 pb-4 flex flex-row justify-between ">
        <CardTitle>Attendance</CardTitle>
        <CardDescription><IoIosMore size={25} /></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} className="h-full">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="boys" fill="var(--color-boys)" radius={4} />
            <Bar dataKey="girls" fill="var(--color-girls)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
