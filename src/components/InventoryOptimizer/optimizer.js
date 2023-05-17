import React, { useEffect, useState } from 'react'
import {
    Typography,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
} from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

const FormLabel = params => {
    return (
        <Grid item xs={6}>
            <Typography variant="subtitle1" fontWeight="bold">
                {params.label}
            </Typography>
            {params.subLabel && (
                <Typography variant="caption" fontStyle="italic">
                    {params.subLabel}
                </Typography>
            )}
        </Grid>
    )
}

const FormUploadButton = () => {
    return (
        <Grid item xs={2}>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<AddBoxOutlinedIcon />}
            >
                Upload File
                <input hidden accept=".csv" type="file"></input>
            </Button>
        </Grid>
    )
}

const FormDownloadTemplateButton = () => {
    return (
        <Grid item xs={2}>
            <Button variant="outlined" color="secondary" size="small">
                Download Template
            </Button>
        </Grid>
    )
}

const FormTextInput = () => {
    return (
        // <Grid container item xs={4}>
        <TextField size="small" variant="outlined"></TextField>
        // </Grid>
    )
}

const SubmitFormButton = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
        >
            <Button variant="contained" color="secondary">
                GENERATE ORDER POLICy
            </Button>
        </Grid>
    )
}

const FormRadioButton = params => {
    return (
        <Grid container xs={4} alignItems="center">
            <RadioGroup
                defaultValue={params.option_one ? params.option_one : 'Yes'}
                row
            >
                <Grid item xs={6} paddingRight={1}>
                    <FormControlLabel
                        value={params.option_one ? params.option_one : 'Yes'}
                        control={<Radio color="secondary" />}
                        label={params.option_one ? params.option_one : 'Yes'}
                    />
                    {params.text_inputs && <FormTextInput />}
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        value={params.option_two ? params.option_two : 'No'}
                        control={<Radio color="secondary" />}
                        label={params.option_two ? params.option_two : 'No'}
                    />
                    {params.text_inputs && <FormTextInput />}
                </Grid>
            </RadioGroup>
        </Grid>
    )
}

const FormUploadField = params => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingY={2}
        >
            <FormLabel label={params.label} subLabel={params.subLabel} />
            <FormUploadButton />
            <FormDownloadTemplateButton />
        </Grid>
    )
}

const FormRadioField = params => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <FormLabel label={params.label} subLabel={params.subLabel} />
            <FormRadioButton
                option_one={params.option_one}
                option_two={params.option_two}
                text_inputs={params.text_inputs}
            />
        </Grid>
    )
}

const FormTextField = params => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <FormLabel label={params.label} subLabel={params.subLabel} />
            <FormTextInput />
        </Grid>
    )
}

const OptimizerContainer = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <FormUploadField label="Upload weekly demand forecast" />
            <FormUploadField label="Upload vendor, costs & lead time details" />
            <FormRadioField
                label="Estimate lead time from purchase order data?"
                subLabel="(If yes, lead time details in previous file will be overridden)"
            />
            <FormUploadField label="Upload purchase order data" />
            <FormRadioField label="Use volume discount?" />
            <FormUploadField label="Upload volume discount details" />
            <FormTextField label="Specify annual holding cost per unit" />
            <FormRadioField
                label="Specify service level %"
                option_one="Fill rate"
                option_two="Cycle service level"
                text_inputs={true}
            />
            <SubmitFormButton />
        </Grid>
    )
}

export default OptimizerContainer
