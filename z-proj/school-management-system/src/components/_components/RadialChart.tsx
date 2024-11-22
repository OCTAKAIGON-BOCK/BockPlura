"use client";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
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
  { students: "Girls", strength: 200, fill: "var(--color-Girls)" },
  { students: "Boys", strength: 275, fill: "var(--color-Boys)" },
];

const chartConfig = {
  strength: {
    label: "strength",
  },
  Boys: {
    label: "Boys",
    color: "hsl(var(--blue-primary))",
  },
  Girls: {
    label: "Girls",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
export function RadialChart() {
  const totalStrength = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.strength, 0);
  }, []);
  return (
    <Card className="flex flex-col bg-brownBackground rounded-xl min-w-[170px] w-full h-[375px]">
      <CardHeader className="items-center p-4 pb-0 flex flex-row justify-between ">
        <CardTitle>Students</CardTitle>
        <CardDescription>
          <IoIosMore size={25} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="strength"
              nameKey="students"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalStrength.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Strength
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-row gap-16 pb-2 lg:gap-4 justify-center text-sm font-mono">
        <div className="flex flex-col gap-1 items-center" >
          <div className="w-5 h-5 rounded-full bg-blueprimary"></div>
          <h1 className="font-bold">1221</h1>
          <h2 className="text-gray-300 font-bold">Boys(55%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center ">
          <div className="w-5 h-5 rounded-full bg-chart-2"></div>
          <h1 className="font-bold">1100</h1>
          <h2 className="text-gray-300 font-bold">Girls(45%)</h2>
        </div>
      </CardFooter>
    </Card>
  );
}
