import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: theme.palette.background.default,
  },
  signin: {
    width: '100%',
    maxWidth: '400px',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    background: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2), // Add top padding to the title
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  },
  submitButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.black,
    fontWeight: '600',
    letterSpacing: '0.05em',
    marginTop: theme.spacing(2),
  },
}));
