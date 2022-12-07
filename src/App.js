import React, { component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



const cus = [{
  'id': '1',
  'image': 'https://placeimg.com/64/64/1',
  'name': '윤상복',
  'birthday': '930515',
  'gender': '남자',
  'job': '세무사'
},
{
  'id': '2',
  'image': 'https://placeimg.com/64/64/2',
  'name': '한반두',
  'birthday': '900707',
  'gender': '남자',
  'job': '축구선수'
},
{
  'id': '3',
  'image': 'https://placeimg.com/64/64/3',
  'name': '이강인',
  'birthday': '950215',
  'gender': '남자',
  'job': '축구선수'
}]

class App extends React.Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
          cus.map(t => {
            return (
            <Customer key={t.id} id={t.id} image={t.image} name={t.name} birthday={t.birthday} gender={t.gender} job={t.job}
            />
            );
          })
        }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;