import React from 'react'
import { Button, Container, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Import = (props) => {
    // fill out this component

console.log(props.makes)
    return (
        <Container>
            <p>Import Component</p>
                <Button variant="contained" 
                color="primary" 
                onClick={props.fetchMakes}>Import</Button>
        <h2>Count: {props.makes.length}</h2>
            <Table>
                <TableHead>
        <TableRow >
            <TableCell >Id</TableCell>
            <TableCell >Make</TableCell>
            <TableCell >Actions</TableCell>
        </TableRow>
            </TableHead>
                <TableBody>
            {props.makes.map((make, index) => (
                <TableRow key={make.MakeId}>
                            <TableCell>{make["MakeId"]}</TableCell>
                            <TableCell>{make["MakeName"]}</TableCell>
                            <TableCell>
                            <DeleteIcon onClick={() => props.deleteMake(index)}
                            className="icon text-red" />
                        </TableCell>
                </TableRow>
        ))}
        </TableBody>
        </Table>
        </Container>
    )
}

export default Import