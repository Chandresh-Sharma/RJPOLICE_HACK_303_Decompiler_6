import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
      },
      searchContainer: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
      },
      dropdownContainer: {
        marginBottom: theme.spacing(2),
      },
      map: {
        height: '400px',
      },
}));
