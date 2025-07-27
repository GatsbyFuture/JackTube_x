import {useState} from 'react';
import {Box, Container, Stack, Typography} from '@mui/material'
import {colors} from '../../constants/colors';
import {Category, Videos} from '../';

const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New');

    const changeCategory = (category) => {
        setSelectCategory(category);
    }

    return (
        <Stack>
            <Category changeCategory={changeCategory} selectCategory={selectCategory}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    <Videos/>
                </Container>
            </Box>
        </Stack>
    )
}

export default Main;

