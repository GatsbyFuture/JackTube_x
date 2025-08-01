import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ApiService} from '../../service/api.service';
import {Box, Container, Stack, Typography} from '@mui/material';
import {colors} from '../../constants/colors';
import {Videos} from '../index';

const Search = () => {
    const [videos, setVideos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getDate = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
                console.log(data);
                setVideos(data.items);
            } catch (e) {
                console.log(e);
            }
        }
        getDate();
    }, [id])

    return (
        <Stack>
            {/*<Category>*/}
            <Box p={2} height={'90vh'}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {id} <span style={{color: colors.secondary}}>Videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    )
}

export default Search;