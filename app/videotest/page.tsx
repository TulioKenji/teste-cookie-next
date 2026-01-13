import ReactPlayer from 'react-player';
import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideoTestPage() {
    return (
    <div>
        <h1>Video Test Page</h1>
        <iframe 
            width="560" 
            height="315" 
            src="" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            />
        <ReactPlayer 
            src="" 
            controls 
            width={1280}
            height={720}
        />
        <YouTubeEmbed 
            videoid="" 
            width={1280}
            height={720}
        />
    </div>
    );
}