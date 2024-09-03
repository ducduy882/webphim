import { Box } from "@mui/material";
import tmdbConfigs from "../../api/configs/tmdb.configs";


const MediaVideo = ({ video, season, episode }) => {

  
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      // paddingTop: '56.25%', // Tỷ lệ 16:9
      aspectRatio: '21/9',
      // margin: '0 auto', 
      overflow: 'hidden',
      backgroundColor: 'background.default',
      borderRadius: '8px'
    }}>
      <iframe
        src={tmdbConfigs.youtubePath(video.imdb_id, season, episode)}
        width="100%"
        height="100%"
        allowFullScreen
        title={video.id}
        style={{
          border: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover'
        }}
      ></iframe>
    </Box>
  );
};

export default MediaVideo;
