import './App.css';
import Workshop from './components/Workshops';

const App = () => {
  return (
    <div className="App">
      <h1>💻 Programming Workshops</h1>
      <h2>Learn to code with our hands-on programming workshops and courses!</h2>
      
      <div className="workshops-container">
        <Workshop 
          title="Introduction to Python" 
          date="October 15, 2024" 
          time="9:00 AM - 12:00 PM"
          level="Beginner"
          instructor="Sarah Chen"
          description="Learn Python basics including variables, loops, and functions"
          timeColor="morning"
        />
        
        <Workshop 
          title="JavaScript for Beginners" 
          date="October 16, 2024" 
          time="2:00 PM - 5:00 PM"
          level="Beginner"
          instructor="Mike Rodriguez"
          description="Master JavaScript fundamentals and DOM manipulation"
          timeColor="afternoon"
        />
        
        <Workshop 
          title="React Component Workshop" 
          date="October 17, 2024" 
          time="6:00 PM - 9:00 PM"
          level="Intermediate"
          instructor="Emma Thompson"
          description="Build interactive React components and understand props"
          timeColor="evening"
        />
        
        <Workshop 
          title="HTML & CSS Basics" 
          date="October 18, 2024" 
          time="10:00 AM - 1:00 PM"
          level="Beginner"
          instructor="David Kim"
          description="Create beautiful websites with HTML structure and CSS styling"
          timeColor="morning"
        />
        
        <Workshop 
          title="Data Structures in Java" 
          date="October 19, 2024" 
          time="1:00 PM - 4:00 PM"
          level="Advanced"
          instructor="Lisa Wang"
          description="Explore arrays, linked lists, stacks, and queues in Java"
          timeColor="afternoon"
        />
        
        <Workshop 
          title="Git & GitHub Essentials" 
          date="October 20, 2024" 
          time="7:00 PM - 9:00 PM"
          level="Beginner"
          instructor="Alex Johnson"
          description="Learn version control and collaborate on coding projects"
          timeColor="evening"
        />
        
        <Workshop 
          title="Python Web Development" 
          date="October 21, 2024" 
          time="9:30 AM - 12:30 PM"
          level="Intermediate"
          instructor="Rachel Green"
          description="Build web applications using Flask framework"
          timeColor="morning"
        />
        
        <Workshop 
          title="Database Design with SQL" 
          date="October 22, 2024" 
          time="2:30 PM - 5:30 PM"
          level="Intermediate"
          instructor="Thomas Brown"
          description="Design databases and write efficient SQL queries"
          timeColor="afternoon"
        />
        
        <Workshop 
          title="Mobile App Development" 
          date="October 23, 2024" 
          time="6:30 PM - 9:30 PM"
          level="Advanced"
          instructor="Jennifer Lee"
          description="Create mobile apps using React Native framework"
          timeColor="evening"
        />
        
        <Workshop 
          title="Algorithm Problem Solving" 
          date="October 24, 2024" 
          time="11:00 AM - 2:00 PM"
          level="Advanced"
          instructor="Kevin Martinez"
          description="Practice coding interviews and algorithm challenges"
          timeColor="morning"
        />
        
        <Workshop 
          title="CSS Grid & Flexbox" 
          date="October 25, 2024" 
          time="3:00 PM - 6:00 PM"
          level="Intermediate"
          instructor="Anna Davis"
          description="Master modern CSS layout techniques for responsive design"
          timeColor="afternoon"
        />
        
        <Workshop 
          title="Node.js Backend Development" 
          date="October 26, 2024" 
          time="7:30 PM - 10:30 PM"
          level="Advanced"
          instructor="Ryan Wilson"
          description="Build server-side applications with Node.js and Express"
          timeColor="evening"
        />
      </div>
    </div>
  )
}

export default App;