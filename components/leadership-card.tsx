"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LeadershipRole {
  title: string
  company: string
  period: string
  description: string
}

interface LeadershipCardProps {
  role: LeadershipRole
  dateColor: string // Added dateColor prop
}

export function LeadershipCard({ role, dateColor }: LeadershipCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-colors h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-white text-base md:text-lg">{role.title}</CardTitle>
            <CardDescription className="text-blue-400 font-medium text-sm">{role.company}</CardDescription>
          </div>
          <Badge
            variant="outline"
            className={`border-${dateColor}-500 text-${dateColor}-400 bg-${dateColor}-500/10 text-xs w-fit`}
          >
            {role.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-300 text-sm">{role.description}</p>
      </CardContent>
    </Card>
  )
}
