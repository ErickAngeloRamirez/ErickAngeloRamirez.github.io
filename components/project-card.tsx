"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "./pdf-viewer"
import { PresentationViewer } from "./presentation-viewer"
import { FileText, Presentation } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  type: "pdf" | "presentation" | "github" | "external"
  link: string
  pdfUrl?: string
  presentationUrl?: string
  period?: string
  achievements?: string
}

interface ProjectCardProps {
  project: Project
  category: string
  dateColor: string // Added dateColor prop
}

export function ProjectCard({ project, category, dateColor }: ProjectCardProps) {
  const renderActionButtons = () => {
    return (
      <div className="flex flex-col sm:flex-row gap-2">
        <PDFViewer
          title={project.title}
          pdfUrl={project.pdfUrl || project.link}
          description={project.description}
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <FileText className="w-4 h-4 mr-2 text-red-400" />
              View PDF
            </Button>
          }
        />
        <PresentationViewer
          title={project.title}
          presentationUrl={project.presentationUrl || project.link}
          description={project.description}
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Presentation className="w-4 h-4 mr-2 text-green-400" />
              View Presentation
            </Button>
          }
        />
      </div>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gray-900/50 border-gray-700 hover:border-gray-600 w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-lg md:text-xl">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-400 mt-2 text-sm md:text-base">{project.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {project.period && (
          <div className="mb-3">
            <Badge variant="outline" className={`border-${dateColor}-500 text-${dateColor}-400 bg-${dateColor}-500/10`}>
              {project.period}
            </Badge>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {project.achievements && (
          <div className="mb-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-sm text-green-300 font-medium mb-1">Key Achievement</p>
            <p className="text-sm text-gray-300">{project.achievements}</p>
          </div>
        )}

        {renderActionButtons()}
      </CardContent>
    </Card>
  )
}
