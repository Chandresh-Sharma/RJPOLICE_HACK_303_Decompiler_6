import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        margin: 20,
        backgroundColor: '#f4f4f4',
      },
      form: {
        maxWidth: 600,
        margin: 'auto',
        padding: 20,
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
      },
      heading: {
        textAlign: 'center',
        color: '#333',
      },
      label: {
        display: 'block',
        marginBottom: 8,
        color: '#555',
      },
      input: {
        width: '100%',
        padding: 10,
        marginBottom: 16,
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: 4,
      },
      button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#45a049',
        },
      },
      liveFeedContainer: {
        display: 'flex',
        marginTop: 16,
      },
      liveFeedInput: {
        flex: 1,
      },
      checkLiveFeedButton: {
        marginLeft: 10,
      },
}));
