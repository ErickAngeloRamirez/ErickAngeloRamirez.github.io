"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PDFViewer } from "./pdf-viewer"
import { AwardIcon } from "lucide-react"

interface Award {
  title: string
  issuer: string
  institution: string
  date: string
  category: string
  description: string
  significance: string
  color: string
  certificateUrl: string
}

interface AwardCardProps {
  award: Award
}

export function AwardCard({ award }: AwardCardProps) {
  return (
    <Card className="group bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <CardTitle className="text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors">
                {award.title}
              </CardTitle>
              <Badge
                variant="outline"
                className={`border-${award.color}-500 text-${award.color}-400 bg-${award.color}-500/10 w-fit`}
              >
                {award.date}
              </Badge>
            </div>
            <div className="space-y-1 mb-3">
              <p className="text-blue-400 font-medium">{award.issuer}</p>
              <p className="text-gray-400 text-sm">{award.institution}</p>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                {award.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-3 mb-4">
          <p className="text-gray-300 leading-relaxed text-sm">{award.description}</p>
          <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-300 font-medium">Significance</p>
            <p className="text-sm text-gray-400 mt-1">{award.significance}</p>
          </div>
        </div>
        <PDFViewer
          title={`${award.title} Certificate`}
          pdfUrl={award.certificateUrl}
          description={`Official certificate for ${award.title}`}
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent mt-auto"
            >
              <AwardIcon className="w-4 h-4 mr-2 text-yellow-400" />
              View Certificate
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}
