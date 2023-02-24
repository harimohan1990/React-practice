import { useId, useState } from "react";

 function UseId(){

    const id = useId();
	const [name, setName] = useState();
	const handleSubmit = () => {
		alert("id " + id + "-name : " + name);
	};

    return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<p>
					Enter Name :{" "}
					<input
						id={id + "-name"}
						onChange={(e) => setName(e.target.value)}
						type="text"
					/>
				</p>

				<button type="submit"> submit</button>
			</form>
		</div>
	);
}

export default UseId;


















// useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

// Note
// useId is not for generating keys in a list. Keys should be generated from your data.

// For a basic example, pass the id directly to the elements that need it: