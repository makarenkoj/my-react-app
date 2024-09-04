import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  const fruits = [{id: 1, name:'apple', calories: 95},
                  {id: 2, name: 'orange', calories: 45},
                  {id: 3, name: 'banana', calories: 105},
                  {id:4, name: 'coconut', calories: 159},
                  {id:5, name: 'pineapple', calories: 37}],
        vegetables = [{id: 6, name:'potatoes', calories: 110},
                      {id: 7, name: 'celery', calories: 15},
                      {id: 8, name: 'carrots', calories: 25},
                      {id: 9, name: 'corn', calories: 63},
                      {id: 10, name: 'broccoli', calories: 50}];

  return(
      <>
          <Header></Header>
          <UserGreeting isLoggedIn={true} username='Yura'></UserGreeting>
          <Button></Button>
          <Food></Food>
          <Card></Card>
          <Student name='Spongebob' age={30} isStudent={false}></Student>
          <Student name='Patrick' age={32} isStudent={true}></Student>
          <Student name='Squidward' age={55} isStudent={true}></Student>
          <Student></Student>
          {fruits.length > 0 && <List items={fruits} category='Fruits'></List>}
          {vegetables.length > 0 && <List items={vegetables} category='Vegetables'></List>}
          <Footer></Footer> 
      </>
  );
}

export default App
