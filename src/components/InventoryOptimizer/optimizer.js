import React, { useEffect, useState } from 'react'
import {
    Typography,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    FormControl,
} from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

const OptimizerContainer = () => {
    const [leadTimeEnabled, setLeadTimeEnabled] = useState(true)
    const [volumneDiscountEnabled, setVolumeDiscountEnabled] = useState(true)
    const [serviceLevel, setServiceLevel] = useState('fill_rate')

    const handleLeadTimeChange = event => {
        event.target.value == 'yes'
            ? setLeadTimeEnabled(true)
            : setLeadTimeEnabled(false)
    }

    const handleVolumDiscountChange = event => {
        event.target.value == 'yes'
            ? setVolumeDiscountEnabled(true)
            : setVolumeDiscountEnabled(false)
    }

    const handleServiceLevelChange = event => {
        console.log(event.target.value)
        event.target.value == 'fill_rate'
            ? setServiceLevel('fill_rate')
            : setServiceLevel('cycle_service_level')
    }

    // General function to export Form label
    const FormLabel = params => {
        return (
            <Typography variant="subtitle1" fontWeight="bold">
                {params.label}
            </Typography>
        )
    }

    // General function to export Form Sub label
    const FormSubLabel = params => {
        return (
            <Typography variant="caption" fontStyle="italic">
                {params.subLabel}
            </Typography>
        )
    }

    // General function to export Form Text Field
    const FormTextField = () => {
        return <TextField size="small" variant="outlined"></TextField>
    }

    // General function to export Form Upload Btn
    const FormUploadButton = params => {
        return (
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<AddBoxOutlinedIcon />}
                id={params.id}
                onClick={params.onClick}
                disabled={params.disabled}
            >
                Upload File
                <input hidden accept=".csv" type="file"></input>
            </Button>
        )
    }

    // General function to export Form template download Btn
    const FormDownloadTemplateButton = params => {
        return (
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                id={params.id}
                onClick={params.onClick}
            >
                Download Template
            </Button>
        )
    }

    // General function to export Form Radio Field
    const FormRadioButton = params => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    id={params.id}
                    value={
                        params.identifier
                            ? Object.keys(params.options)[0]
                            : Object.keys(params.options)[1]
                    }
                    onChange={params.onChange}
                >
                    {Object.keys(params.options).map((value, index) => (
                        <FormControlLabel
                            key={index}
                            value={value}
                            control={<Radio />}
                            label={params.options[value]}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        )
    }

    // General Custom function to export Form Radio Field
    const CustomFormRadioButton = params => {
        return (
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <RadioGroup
                    row
                    id={params.id}
                    value={params.identifier}
                    onChange={params.onChange}
                >
                    {Object.keys(params.options).map((value, index) => (
                        <Grid xs={6} item key={index}>
                            <>
                                <FormControlLabel
                                    key={index}
                                    value={value}
                                    control={<Radio />}
                                    label={params.options[value]}
                                />
                                <FormTextField />
                            </>
                        </Grid>
                    ))}
                </RadioGroup>
            </Grid>
        )
    }

    // Weekly Forcast btn handlers
    const handleWeeklyForcastUploadBtn = event => {
        console.log(event)
    }
    const handleWeeklyForcastDownloadBtn = event => {
        console.log(event)
    }

    // Vendor Cost and Lead Time btn handlers
    const handleVendorCostTimeUploadBtn = event => {
        console.log(event)
    }
    const handleVendorCostTimeDownloadBtn = event => {
        console.log(event)
    }

    // Purchase order btn handlers
    const handlePurchaseOrderUploadBtn = event => {
        console.log(event)
    }
    const handlePurchaseOrderDownloadBtn = event => {
        console.log(event)
    }

    // Volume Discount btn handlers
    const handleVolumeDiscountUploadBtn = event => {
        console.log(event)
    }
    const handleVolumeDiscountDownloadBtn = event => {
        console.log(event)
    }

    const WeeklyForcastContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <FormLabel label="Upload weekly demand forecast" />
                </Grid>
                <Grid item xs={2}>
                    <FormUploadButton
                        id="weekly-forcast-uploader"
                        onClick={handleWeeklyForcastUploadBtn}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormDownloadTemplateButton
                        id="weekly-forcast-template-downloader"
                        onClick={handleWeeklyForcastDownloadBtn}
                    />
                </Grid>
            </Grid>
        )
    }

    const VendorCostTimeContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <FormLabel label="Upload vendor, costs & lead time details" />
                </Grid>
                <Grid item xs={2}>
                    <FormUploadButton
                        id="vendor-cost-time-uploader"
                        onClick={handleVendorCostTimeUploadBtn}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormDownloadTemplateButton
                        id="vendor-cost-time-template-downloader"
                        onClick={handleVendorCostTimeDownloadBtn}
                    />
                </Grid>
            </Grid>
        )
    }

    const EstimateLeadTimeContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <FormLabel label="Estimate lead time from purchase order data?" />
                        </Grid>
                        <Grid item>
                            <FormSubLabel subLabel="(If yes, lead time details in previous file will be overridden)" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <FormRadioButton
                        options={{ yes: 'Yes', no: 'No' }}
                        identifier={leadTimeEnabled}
                        id="estimate-lead-time-selector"
                        onChange={handleLeadTimeChange}
                    />
                </Grid>
            </Grid>
        )
    }

    const PurchaseOrderContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6} container justifyContent="center">
                    <Grid item xs={6}>
                        <FormLabel label="Upload purchase order data" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    justifyContent="center"
                    direction="row"
                >
                    <Grid item xs={6}>
                        <FormUploadButton
                            id="purchase-order-data-uploader"
                            onClick={handlePurchaseOrderUploadBtn}
                            disabled={leadTimeEnabled ? false : true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormDownloadTemplateButton
                            id="purchase-order-data-template-downloader"
                            onClick={handlePurchaseOrderDownloadBtn}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const VolumeDiscountContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <FormLabel label="Use volume discount?" />
                </Grid>

                <Grid item xs={4}>
                    <FormRadioButton
                        options={{ yes: 'Yes', no: 'No' }}
                        identifier={volumneDiscountEnabled}
                        id="volume-discount-selector"
                        onChange={handleVolumDiscountChange}
                    />
                </Grid>
            </Grid>
        )
    }

    const VolumeDiscountDetailsContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6} container justifyContent="center">
                    <Grid item xs={6}>
                        <FormLabel label="Upload volume discount details" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    justifyContent="center"
                    direction="row"
                >
                    <Grid item xs={6}>
                        <FormUploadButton
                            id="volume-discount-data-uploader"
                            onClick={handleVolumeDiscountUploadBtn}
                            disabled={volumneDiscountEnabled ? false : true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormDownloadTemplateButton
                            id="volume-discount-template-downloader"
                            onCick={handleVolumeDiscountDownloadBtn}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const AnnualHoldingCostContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <FormLabel label="Specify annual holding cost per unit" />
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={6} direction="column">
                        <FormTextField />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const ServiceLevelContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <FormLabel label="Specify service level %" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <CustomFormRadioButton
                        options={{
                            fill_rate: 'Fill Rate',
                            cycle_service_level: 'Cycle Service Level',
                        }}
                        identifier={serviceLevel}
                        id="service-level-selector"
                        onChange={handleServiceLevelChange}
                    />
                </Grid>
            </Grid>
        )
    }

    const ServiceLevelTextContainer = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Grid container item xs={6} justifyContent="center" spacing={2}>
                    <Grid item xs={4} direction="column">
                        <FormTextField />
                    </Grid>
                    <Grid item xs={4} direction="column">
                        <FormTextField />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const SubmitFormButton = () => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Button variant="contained" color="secondary">
                        GENERATE ORDER POLICy
                    </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container direction="column" justifyContent="center" spacing={2}>
            <Grid item>
                <WeeklyForcastContainer />
            </Grid>
            <Grid item>
                <VendorCostTimeContainer />
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid container item>
                        <EstimateLeadTimeContainer />
                    </Grid>
                    <Grid container item>
                        <PurchaseOrderContainer />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid container item>
                        <VolumeDiscountContainer />
                    </Grid>
                    <Grid container item>
                        <VolumeDiscountDetailsContainer />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <AnnualHoldingCostContainer />
            </Grid>
            <Grid item>
                <ServiceLevelContainer />
            </Grid>
            <Grid item>
                <SubmitFormButton />
            </Grid>

            {/* <FormUploadField label="Upload weekly demand forecast" />
            <FormUploadField label="Upload vendor, costs & lead time details" />
            <FormRadioField
                label="Estimate lead time from purchase order data?"
                subLabel="(If yes, lead time details in previous file will be overridden)"
                onChange={handleLeadTimeChange}
            />
            <FormUploadField label="Upload purchase order data" />
            <FormRadioField
                label="Use volume discount?"
                onChange={handleVolumDiscountChange}
            />
            <FormUploadField label="Upload volume discount details" />
            <FormTextField label="Specify annual holding cost per unit" />
            <FormRadioField
                label="Specify service level %"
                option_one="Fill rate"
                option_two="Cycle service level"
                text_inputs={true}
            />
            <SubmitFormButton /> */}
        </Grid>
    )
}

export default OptimizerContainer
