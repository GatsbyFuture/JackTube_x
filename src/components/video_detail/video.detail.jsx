import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import {ApiService} from '../../service/api.service';
import {Box} from '@mui/material';
import './video.detail.css';

const VideoDetail = () => {
    const {id} = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        try {
            const getData = async () => {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
                console.log('data =>', data);
                setVideoDetail(data.items[0]);
            }
            getData();
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    const {
        snippet: {title, channelId, channelTitle, description, tags, thumbnails},
        statistics: {viewCount, likeCount, commentCount}
    } = videoDetail || {snippet: {}, statistics: {}};

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'}>
                <Box width={'75%'} mx={2} className={'react-player'}>
                    {/*<ReactPlayer*/}
                    {/*    url="https://www.youtube.com/watch?v=PT6cKHsMzSQ"*/}
                    {/*    className={'react-player'}*/}
                    {/*    controls*/}
                    {/*/>*/}
                    <YouTube videoId="PT6cKHsMzSQ" opts={{width: '100%', height: '800hv'}}/>
                </Box>
                <Box width={'25%'}>Suggested videos</Box>
            </Box>
        </Box>
    )
}

export default VideoDetail;