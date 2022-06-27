import React from "react";

export default function Form() {
    return (
	<div class="container" >
		<div class="row">
		<div class="col-md-3">
		</div>
		<div class="col-md-6 main">
					
			<form action="/sign_up" method="post">
					
			<h1> Employee Records </h1>
			<br></br><br></br>
			<h2> Sign up Employee </h2>
							
			<input class="box" type="text" name="name" id="name"
			placeholder="Name" required /><br></br><br></br>
							
			<input class="box" type="email" name="email" id="email"
			placeholder="E-Mail " required /><br></br><br></br>
							
			<input class="box" type="password" name="password"
			id="password" placeholder="Password " required/><br></br><br></br>
							
			<input class="box" type="text" name="phone" id="phone"
			placeholder="Phone Number " required/><br></br><br></br>
                     
			<input class="col-sm-6"  type="submit" id="submitDetails"
			name="submitDetails" value="Submit" /><br></br><br></br>
			</form>		
		</div>
		<div class="col-md-3">
		</div>	
	</div>
	</div>
    );
}
  