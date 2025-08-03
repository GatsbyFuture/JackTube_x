import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import './video.card.css';
import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import {colors} from '../../constants/colors';

const VideoCard = ({video}) => {
    return (
        <Card sx={{width: {xs: '100%', sm: '360px', md: '320px'}, boxShadow: 'none', borderRadius: 0}}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: {xs: '100%', sm: '360px', md: '320px'}, height: '180px'}}
                />
            </Link>
            <CardContent sx={{background: colors.primary, height: '200px', position: 'relative'}}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={5} sx={{opacity: '.4'}}>
                        {dayjs(video?.snippet?.publishedAt).format('YYYY-MM-DD')}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 35)}...
                    </Typography>
                    <Typography variant="subtitle2" sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>
                </Link>
                <Fragment>
                    <Stack direction={'row'}
                           position={'absolute'}
                           bottom={'10px'}
                           alignItems={'center'}
                           gap={'5px'}
                           mt={3}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography variant="subtitle2" color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Stack>
                </Fragment>
            </CardContent>
        </Card>
    )
}

export default VideoCard;