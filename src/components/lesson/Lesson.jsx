import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=UjtOGPJ0URM"
        onProgress={handleWatchComplete}
      />
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
