"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Slide1 from "@/components/slide-1"
import Slide2 from "@/components/slide-2"
import Slide3 from "@/components/slide-3"
import Slide4 from "@/components/slide-4"
import { motion, AnimatePresence } from "framer-motion"
import ReactToPrint from "react-to-print"

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isPrintMode, setIsPrintMode] = useState(false)
  const totalSlides = 4
  const printRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? prev : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handlePrintBefore = () => {
    setIsPrintMode(true)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }

  const handlePrintAfter = () => {
    setIsPrintMode(false)
  }

  const slides = [
    <Slide1 key="slide-1" />,
    <Slide2 key="slide-2" />,
    <Slide3 key="slide-3" />,
    <Slide4 key="slide-4" />,
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full bg-[#4ECDC4]/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full bg-[#FFE66D]/10 blur-3xl"></div>
        <div className="absolute top-[30%] left-[10%] w-40 h-40 rounded-full bg-[#FF6B6B]/10 blur-3xl"></div>
      </div>

      <div className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Logo and title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#2B2D42] text-white p-2 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">CT</span>
            </div>
            <h2 className="text-[#2B2D42] font-semibold hidden sm:block">Circle Time Staffing</h2>
          </div>

          <div className="flex items-center gap-2">
            <ReactToPrint
              trigger={() => (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </Button>
              )}
              content={() => printRef.current}
              documentTitle="Circle Time Staffing Presentation"
              onBeforeGetContent={handlePrintBefore}
              onAfterPrint={handlePrintAfter}
            />
            <div className="text-sm text-[#2B2D42]/70">Presentation Deck</div>
          </div>
        </div>

        {/* Slide content for display */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {slides[currentSlide]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#2B2D42] w-6" : "bg-[#2B2D42]/30 hover:bg-[#2B2D42]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 bg-[#2B2D42] hover:bg-[#2B2D42]/90"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hidden printable version with all slides */}
      <div className="hidden">
        <div ref={printRef} className="print-container">
          <div className="print-header">
            <div className="flex items-center gap-2 p-4 border-b">
              <div className="bg-[#2B2D42] text-white p-2 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">CT</span>
              </div>
              <h2 className="text-[#2B2D42] font-semibold">Circle Time Staffing</h2>
            </div>
          </div>

          {/* All slides for printing */}
          <div className="print-slide">
            <Slide1 />
            <div className="print-page-number">1</div>
          </div>
          <div className="print-slide">
            <Slide2 />
            <div className="print-page-number">2</div>
          </div>
          <div className="print-slide">
            <Slide3 />
            <div className="print-page-number">3</div>
          </div>
          <div className="print-slide">
            <Slide4 />
            <div className="print-page-number">4</div>
          </div>

          <div className="print-footer">
            <div className="flex justify-between items-center p-4 border-t text-xs text-[#2B2D42]/70">
              <span>Circle Time Staffing - Bringing reliability back to ECE staffing</span>
              <span>Contact: harris@getcircletime.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
