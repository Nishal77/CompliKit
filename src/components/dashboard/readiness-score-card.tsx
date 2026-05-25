"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReadinessScoreCardProps {
  score: number;
}

export function ReadinessScoreCard({ score }: ReadinessScoreCardProps) {
  const data = [
    { value: score },
    { value: 100 - score },
  ];

  const color = score >= 80 ? "#1A7A4A" : score >= 50 ? "#D4A017" : "#C0392B";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Readiness Score
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative h-36 w-36">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={64}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                <Cell fill={color} />
                <Cell fill="#e2e8f0" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold" style={{ color }}>
              {score}%
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground text-center">
          {score < 40
            ? "Early stage — many controls need attention"
            : score < 70
            ? "Making progress — keep going"
            : score < 90
            ? "Almost there — a few gaps remain"
            : "Audit-ready — excellent work!"}
        </p>
      </CardContent>
    </Card>
  );
}
