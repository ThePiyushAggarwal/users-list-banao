import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AssignmentIndIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
