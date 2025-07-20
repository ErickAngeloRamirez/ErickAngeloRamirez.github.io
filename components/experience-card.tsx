"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  type: string
  period: string
  location: string
  description: string
  skills: string[]
  achievements?: string
}

interface ExperienceCardProps {
  experience: Experience
  dateColor: string // Added dateColor prop
}

export function ExperienceCard({ experience, dateColor }: ExperienceCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-colors h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <CardTitle className="text-white text-lg md:text-xl">{experience.title}</CardTitle>
            <CardDescription className="text-blue-400 text-base md:text-lg font-medium">
              {experience.company}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                {experience.type}
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                {experience.location}
              </Badge>
            </div>
          </div>
          <Badge
            variant="outline"
            className={`border-${dateColor}-500 text-${dateColor}-400 bg-${dateColor}-500/10 w-fit`}
          >
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-300 mb-4 text-sm">{experience.description}</p>

        {experience.achievements && (
          <div className="mb-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-sm text-green-300 font-medium mb-1">Key Achievement</p>
            <p className="text-sm text-gray-300">{experience.achievements}</p>
          </div>
        )}

        {experience.skills && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {experience.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
