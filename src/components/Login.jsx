import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [same, setSame] = useState(true);

    const navigate = useNavigate();

    function handlepw1Change (event) {
        setPw1(event.target.value);
    }

    function handlepw2Change (event) {
        setPw2(event.target.value);
    }

    function handlePassword() {

        if(pw1==pw2) {
            console.log("Same")
            setSame(true)
        }
        else {
            console.log("not same");
            setSame(false);
        }
    }

    function navi() {
      pw1 == pw2 ? navigate('/tabs') : setSame(false)
    }


  return (
    <Form action="" className="my-5" style={{margin : "auto",width:"50%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pw1} onChange={handlepw1Change} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicrePassword">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control value={pw2} onChange={handlepw2Change} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handlePassword} label="I agreed" required />
      </Form.Group>
        {console.log(pw2 , pw1)}

      {!same || (pw2 && pw1)=="" ? <Form.Text className="text-muted">
          Password Not Match...
        </Form.Text>:<Button variant="primary" onClick={navi} >
        Submit
      </Button>}
    </Form>
  );
}

export default Login;