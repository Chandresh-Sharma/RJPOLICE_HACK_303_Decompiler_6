import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        position: 'relative', // Add this to make position:relative
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
      },
      media: {
        height: 200, // Set your desired height
        width: '100%', // Set to '100%' to make it responsive
        opacity: 0.7, // Adjust the opacity value (0.0 to 1.0)
      },
      button: {
        position: 'absolute', // Add this to make position:absolute
        top: '50%', // Adjust the top position as needed
        transform: 'translateY(-50%)', // Center the button vertically
      },
}));
