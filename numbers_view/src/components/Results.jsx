import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {useRecoilValue} from "recoil";
import {userState} from "../App";


const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2, 2),
        backgroundColor: theme.palette.primary.main,
    },
    results: {
        marginLeft: theme.spacing(2),
        color: theme.palette.info.contrastText
    }
}));

const Results = () => {
    const classes = useStyles();
    const user = useRecoilValue(userState);


    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className={classes.title}>
                    <Typography variant="h6" className={classes.results}>
                        {'Results'}
                    </Typography>
                </div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell align="center">Img Processed</TableCell>
                                    <TableCell align="center">Prediction</TableCell>
                                    <TableCell align="center">Accuracy</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.results.slice(0, 5).map((row) => (
                                    <TableRow key={row.image}>
                                        <TableCell align="center"><img width="28" height="28" src={row.image}
                                                                       alt={"saved"}/></TableCell>
                                        <TableCell align="center"><img width="28" height="28" src={row.imgProcessed}
                                                                       alt={"processed"}/></TableCell>
                                        <TableCell align="center">{row.prediction}</TableCell>
                                        <TableCell align="center">{row.accuracy}%</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Results;