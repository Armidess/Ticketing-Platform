import "./LoginUi.css";
import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import auth from "./firebase";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userSlice";

function LoginUi(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const dispatch = useDispatch();

	// const login = (event) => {
	// 	event.preventDefault();
	// 	signInWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			const user = userCredential.user;
	// 			const serilizedUser = {
	// 				uid: user.uid,
	// 				email: user.email,
	// 				displayName: user.displayName,
	// 			};
	// 			dispatch(loginSuccess(serilizedUser));
	// 			console.log("User Logged In Successfully");
	// 		})
	// 		.catch((error) => {
	// 			prompt("Error in Logging In");
	// 			console.log(error);
	// 		});
	// 	setEmail("");
	// 	setPassword("");
	// };

	return (
		<div className="login_page_Outer_div">
			<div className="box">
				<span className="borderLine"></span>
				<form onSubmit={window.alert("Successfull Submission")}>
					<h2>Welcome Back</h2>
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
						<span draggable="false" onClick={props.setSignup}>
							Create New Account
						</span>
					</div>
					<input type="submit" value="Login"></input>
				</form>
			</div>
		</div>
	);
}

export default LoginUi;