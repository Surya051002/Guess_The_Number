import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <> <header id='header'>
      <label id='matrimony'>Matrimony</label>
      <span id='login'>
        <h5>
          you are already a member?<a href='login'><button>login</button></a>
        </h5>
        </span>
        
      </header>
      <span id='imgs'>
      <img src='https://th.bing.com/th/id/OIP.qUF_dHdYyCRHobZLvcbd5wHaEK?pid=ImgDet&rs=1' width='500%' height='300px' id='img1'/>
      <img src='https://www.rxwallpaper.site/wp-content/uploads/contact-us-for-wedding-website-indian-marriage-e-invitation-card-800x800.jpg' width='500%' height='300px' />
      <img src='https://thumbs.dreamstime.com/b/wedding-rings-20228850.jpg' width='500%' height='300px'/>
      
      
      </span>
    <h1 class='c1'><i>Your search for the perfect match ends here!</i></h1>
    <label>Matrimony Profile  for</label>
    <select>
      <option>Myself</option>
      <option>Daughter</option>
      <option>Brother</option>
      <option>Son</option>
      <option>Sister</option>
      <option>Friend</option>
      <option>Relative</option>
    </select>
    <br></br>
    <br/>
    <label>Name</label>
    <input type='text' placeholder='Name'></input>
    </>
  );
}

export default App;
