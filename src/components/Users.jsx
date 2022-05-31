import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Users({ passDataToCard, data }) {
  return (
    <Box
      sx={{
        width: '90%',
        backgroundColor: 'hsla(203, 100%, 60%, 1)',
        marginTop: 3,
        minHeight: '300px',
      }}
    >
      <List>
        {data.length ? (
          data.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => passDataToCard(item)}>
                <ListItemIcon>
                  <img
                    style={{
                      height: '50px',
                      width: '50px',
                    }}
                    src={item.avatar}
                    alt="profile"
                    onError={(e) => {
                      e.target.onerror = null // prevents looping
                      e.target.src = `./assets/avatars/5927577-${Math.floor(
                        Math.random() * 8 + 1
                      )}.png`
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  {item.profile.firstName} {item.profile.lastName}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </List>
    </Box>
  )
}

export default Users
