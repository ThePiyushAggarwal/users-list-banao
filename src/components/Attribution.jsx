import { Link, Box, Typography } from '@mui/material/'
import { grey } from '@mui/material/colors'

function Attribution() {
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: 1,
        display: 'flex',
      }}
      variant="body2"
      color={grey[900]}
    >
      <Typography variant="body2">Attribution: </Typography>
      <Link
        href="https://www.freepik.com/vectors/portrait-illustration"
        underline="none"
        variant="body2"
        color={grey[900]}
      >
        Portrait illustration vector created by freepik - www.freepik.com
      </Link>
    </Box>
  )
}

export default Attribution
