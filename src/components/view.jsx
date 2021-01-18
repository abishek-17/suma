import React, { Component } from "react";
import { connect } from "react-redux";
//import { savep } from "../store/patientdata/actions";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class View extends Component {
  state = {
  };
  render() {
    console.log(this.props)
    return (
      <div>
      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Phonenumer</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Starting Time</TableCell>
            <TableCell align="right">Ending Time</TableCell>
            <TableCell align="right">Cheif Complaint</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.lenght!==0 &&this.props.data.map((product) => (
            <TableRow key={product.name}>
              <TableCell align="right">{product.firstName}</TableCell>
              <TableCell align="right">{product.lastName}</TableCell>
              <TableCell align="right">{product.phonenumber}</TableCell>
              <TableCell align="right">{product.email}</TableCell>
              <TableCell align="right">{product.Stime}</TableCell>
              <TableCell align="right">{product.Etime}</TableCell>
              <TableCell align="right">{product.Cheifcomplaint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(View);
