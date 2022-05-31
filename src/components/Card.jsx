import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

function Card({ userData }) {
  return (
    <Box
      sx={{
        marginTop: 3,
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'hsla(203, 100%, 80%, 1)',
          minHeight: '300px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 0',
        }}
        elevation={12}
      >
        {Object.keys(userData).length > 1 ? (
          <>
            <img
              src={userData.avatar}
              alt={userData.profile.firstName + ' ' + userData.profile.lastName}
              style={{ height: '150px', width: '150px', marginBottom: '10px' }}
              onError={(e) => {
                e.target.onerror = null // prevents looping
                e.target.src = `./assets/avatars/5927577-${Math.floor(
                  Math.random() * 8 + 1
                )}.png`
              }}
            />
            <Typography sx={{ marginBottom: '20px' }}>
              @{userData.profile.username}
            </Typography>

            <TextField
              label="Bio"
              value={userData.Bio}
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Full Name"
              value={
                userData.profile.firstName + ' ' + userData.profile.lastName
              }
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Job Title"
              value={userData.jobTitle}
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Email"
              value={userData.profile.email}
              variant="standard"
              sx={{ width: '80%' }}
            />
          </>
        ) : (
          userData.message
        )}
      </Paper>
    </Box>
  )
}

export default Card
