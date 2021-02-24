import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

export default function PokemonTable() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // -1 to enable server side count by material docs
  const [count, setCount] = React.useState(-1)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const getPokemonList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0").then((result) => {
      setPokemons(result.data.results);
      setCount(result.data.count);
    }).catch((error) => {
      // handle error
      console.log(error);
    })
  }

  useEffect( () => {
    getPokemonList();
  }, [])

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableRow>
              <TablePagination
                component="td"
                count={count}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}