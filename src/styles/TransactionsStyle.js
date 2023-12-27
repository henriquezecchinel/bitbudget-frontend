import { createTheme } from '@mui/material/styles';

const tableHeadStyle = createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: 'primary.main',
                    color: 'white',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: 'bold',
                },
            },
        },
    },
});

const transactionsStyle = {
    tableHeadStyle
}

export default transactionsStyle;