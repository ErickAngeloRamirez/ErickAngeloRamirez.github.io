"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Presentation, Download, ExternalLink, Maximize2 } from "lucide-react"

interface PresentationViewerProps {
  title: string
  presentationUrl: string
  description?: string
  trigger?: React.ReactNode
}

export function PresentationViewer({ title, presentationUrl, description, trigger }: PresentationViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = presentationUrl
    link.download = `${title}-presentation`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const defaultTrigger = (
    <Button
      variant="outline"
      size="sm"
      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
    >
      <Presentation className="w-4 h-4 mr-2 text-green-400" />
      View Presentation
    </Button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent
        className={`bg-gray-900 border-gray-700 p-0 ${isFullscreen ? "max-w-full h-screen" : "max-w-6xl h-[90vh]"}`}
      >
        <DialogHeader className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-white text-xl">{title}</DialogTitle>
              {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                Presentation
              </Badge>
              <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-gray-300 hover:bg-gray-800">
                <Maximize2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} className="text-gray-300 hover:bg-gray-800">
                <Download className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(presentationUrl, "_blank")}
                className="text-gray-300 hover:bg-gray-800"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 p-4 bg-gray-800">
          <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={presentationUrl}
              className="w-full h-full border-0"
              title={`Presentation Viewer - ${title}`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
