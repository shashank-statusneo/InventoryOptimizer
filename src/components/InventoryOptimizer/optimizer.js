import React, { useEffect, useState } from 'react'
import { Typography, Button,  } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const WeeklyDemandForecast = () => {

    return (
        <>
        <Typography>
            Upload weekly demand forecast
        </Typography>

        <Button
        variant="contained"
        startIcon={<AddBoxOutlinedIcon/>}
        >
            Upload
            <input hidden accept="csv/*" multiple type="file" />
        </Button>

        </>
    )

}


const OptimizerContainer = () => {
    return (
        <>
        <WeeklyDemandForecast/>
        </>
    )
}

export default OptimizerContainer;