import ReactPlayer from 'react-player/youtube'

export const Video = () => (
  <div className="flex flex-col items-center w-full">
    <div className="flex justify-center w-min-content h-80 bg-white rounded-2xl shadow-lg bg-clip-border">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=d_JSWHEgFkc&ab_channel=Hostaway"
        controls
      />
    </div>

    {/*
    <span className="text-gray-400 opacity-90 text-sm mt-8">
      a video worth a thousand words
    </span>
    */}
  </div>
)
// border-gray-200 border
