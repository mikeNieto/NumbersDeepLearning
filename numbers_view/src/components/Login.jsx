import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {useSetRecoilState} from "recoil";
import {userState} from "../App";
import {PersonOutline} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4, 6),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 1),
    },
}));

export default function Login({history}) {
    const classes = useStyles();
    const {register, handleSubmit} = useForm();
    const setUserName = useSetRecoilState(userState);

    const createNewUserName = (oldData, newValue) => {
        return {
            name: newValue,
            results: []
        }
    }

    const startApp = (data) => {
        setUserName((oldData) => createNewUserName(oldData, data.name));
        history.push("/predictor");
    }


    return (
        <Grid container className={classes.root} justify={"center"}>
            <Grid>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonOutline/>
                    </Avatar>
                    <form className={classes.form} onSubmit={handleSubmit(startApp)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            inputRef={register}
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Enter
                        </Button>
                    </form>
                </Paper>
                <Box mt={2}>
                    <Copyright/>
                </Box>
            </Grid>
        </Grid>
    );
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="primary" align="center">
            {'Michael Nieto - '}
            {new Date().getFullYear()}
        </Typography>
    );
}