import { useEffect, useState } from "react";

function getWindowDimensionsOnce() {
   const { innerWidth: width } = window
   return width 
}

export default function useWindowDimension(comparisonSize) {
   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensionsOnce())
   const [isMobile, setIsMobile] = useState(false)
   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensionsOnce())
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])
   useEffect(() => {
      if(windowDimensions > comparisonSize ) {
      setIsMobile(false)
      } else {
      setIsMobile(true)
      }
   }, [windowDimensions])
   return [isMobile, windowDimensions];
}