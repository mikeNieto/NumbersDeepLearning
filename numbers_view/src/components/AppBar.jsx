import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useRecoilValue} from "recoil";
import {userState} from "../App";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({history}) {
    const classes = useStyles();
    const user = useRecoilValue(userState);

    const handleBack = () => {
        history.push("/");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {user.name}
                    </Typography>
                    <Button color="secondary" onClick={handleBack}>Back</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
