import "./SignUp.css";
import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "./firebase";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userSlice";

function SignUp(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const dispatch = useDispatch();

	// const signup = (event) => {
	// 	event.preventDefault();
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			const user = userCredential.user;
	// 			const serilizedUser = {
	// 				uid: user.uid,
	// 				email: user.email,
	// 				displayName: user.displayName,
	// 			};
	// 			dispatch(loginSuccess(serilizedUser));
	// 			console.log("User Created Successfully");
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 	setEmail("");
	// 	setPassword("");
	// };

	return (
		<div className="login_page_Outer_div">
			<div className="box">
				<span className="borderLine"></span>
				<form onSubmit={window.alert("Sign Up Successfull")}>
					<h2>Create New Account</h2>
					<div className="inputBox">
						<input
							type="email"
							required="required"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						></input>
						<span> Username</span>
						<i></i>
					</div>
					<div className="inputBox">
						<input
							type="password"
							required="required"
							value={password}
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						></input>
						<span> Password</span>
						<i></i>
					</div>
					<div className="links">
						<span draggable="false" onClick={props.setLogin}>
							Already Have An Account
						</span>
					</div>
					<input type="submit" value="SignUp"></input>
				</form>
			</div>
		</div>
	);
}

export default SignUp;