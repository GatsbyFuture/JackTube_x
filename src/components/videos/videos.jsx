import {Stack, Box} from '@mui/material';
import {VideoCard} from '../';
import {ChannelCard} from '../';
import {Loader} from '../';

const Videos = ({videos}) => {

    if (!videos.length) {
        return <Loader/>;
    }

    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
        >
            {videos.map(video => (
                <Box key={video.id.videoId} sx={{flexGrow: 1}}>
                    {video.id.videoId && <VideoCard video={video}/>}
                    {video.id.channelId && <ChannelCard video={video}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos;