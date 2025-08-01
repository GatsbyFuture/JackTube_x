import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Search} from '@mui/icons-material';
import {Paper, IconButton} from '@mui/material';
import {colors} from '../../constants/colors';

import './search.bar.css';

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`);
        }
    }

    return (
        <Paper
            component={'form'}
            onSubmit={submitHandler}
            sx={{border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none', mr: 5}}
        >
            <input
                type={'text'}
                value={value}
                placeholder={'Search...'}
                className="search-bar"
                onChange={(e) => setValue(e.target.value)}
            />
            <IconButton type="submit">
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;