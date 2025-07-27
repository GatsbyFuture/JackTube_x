import {Stack} from '@mui/material';
import {categories} from '../../constants';
import './category.css';
import {colors} from '../../constants/colors';

const Category = ({changeCategory, selectCategory}) => {
    return (
        <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
            {categories.map((category) => (
                <button
                    key={category.name}
                    className="category-btn"
                    style={{
                        borderRadius: '0',
                        background: category.name === selectCategory && colors.secondary,
                        color: category.name === selectCategory && '#fff'
                    }}
                    onClick={() => changeCategory(category.name)}
                >
                    <span style={{
                        color: category.name === selectCategory ? '#fff' : colors.secondary,
                        marginRight: '15px'
                    }}>{category.icon}</span>
                    <span style={{opacity: '1'}}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category;