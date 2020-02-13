import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)
  const VideoUrl = "https://www.youtube.com/watch?v=v3y8AIEX_dU"
  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div>
      <ResponsivePlayer
        url= {videoUrl}
        onProgress={handleWatchComplete}
      />
      <div>
      </div>
      <div
        className={
          watchComplete
            ? "marker marker--is-complete"
            : "marker marker--not-complete"
        }
      >
        Completed
      </div>
      
    </div>
  )
}

export default Lesson
