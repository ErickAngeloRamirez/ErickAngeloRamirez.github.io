"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react"

interface PDFViewerProps {
  title: string
  pdfUrl: string
  description?: string
  trigger?: React.ReactNode
}

export function PDFViewer({ title, pdfUrl, description, trigger }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  const defaultTrigger = (
    <Button
      variant="outline"
      size="sm"
      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
    >
      <FileText className="w-4 h-4 mr-2 text-red-400" />
      View PDF
    </Button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="max-w-6xl h-[90vh] bg-gray-900 border-gray-700 p-0">
        <DialogHeader className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-white text-xl">{title}</DialogTitle>
              {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                {zoom}%
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleZoomOut} className="text-gray-300 hover:bg-gray-800">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleZoomIn} className="text-gray-300 hover:bg-gray-800">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} className="text-gray-300 hover:bg-gray-800">
                <Download className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(pdfUrl, "_blank")}
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
              src={`${pdfUrl}#zoom=${zoom}`}
              className="w-full h-full border-0"
              title={`PDF Viewer - ${title}`}
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
