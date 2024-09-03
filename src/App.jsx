import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
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
          <Footer></Footer>
      </>
  );
}

export default App
