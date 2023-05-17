import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'
import Grid from '@mui/material'
import UserSession from '../services/auth'

const Profile = () => {

    const [user, setUser] = useState({
        first_name: 'Unknown',
        last_name: 'User',
        email: 'N/A',
    })

    useEffect(() => {
        setUser(UserSession.getUser())
        console.log(user)
    }, [])
    return (
        <Card
            sx={{ maxWidth: 300 }}
            style={{
                justify: 'center',
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <CardContent>
                <CardMedia
                    sx={{ height: 140 }}
                    image="./profilepic.svg"
                    title="profile pic"
                />
                <Typography variant="h5" component="div">
                    {user.first_name} {user.last_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.email}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Profile
