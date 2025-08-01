import {useState, useEffect} from 'react';
import {Box, Container, Stack, Typography} from '@mui/material'
import {colors} from '../../constants/colors';
import {Category, Videos} from '../';
import {ApiService} from '../../service/api.service';

const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const changeCategory = (category) => {
        setSelectCategory(category);
    }

    useEffect(() => {
        ApiService.fetching(`search?part=snippet$q=${selectCategory}`).then(data => {
            console.log(data);
            setVideos(data.items)
        }).catch(e => console.log(e));
    }, [selectCategory]);

    return (
        <Stack>
            <Category changeCategory={changeCategory} selectCategory={selectCategory}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    )
}

export default Main;

