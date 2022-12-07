import React, { component } from 'react';
import './App.css';
import Customer from './components/Customer'

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
      <div>
        {
          cus.map(t => {
            return (
            <Customer
              key={t.id}
              id={t.id}
              image={t.image}
              name={t.name}
              birthday={t.birthday}
              gender={t.gender}
              job={t.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;