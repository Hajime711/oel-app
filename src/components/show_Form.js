import React from "react";

export default function show_Form() {
    return (
	<div class="container" >
		<div class="row">
		<div class="col-md-3">
		</div>
		<div class="col-md-6 main">
					
			<form action="/read" method="get">
					
			<h1> Employee Records </h1>
			<br></br><br></br>
			<h2> Employee signed up </h2>
            <br></br>
			<input class="col-sm-6"  type="submit" id="submitDetails"
			name="submitDetails" value="Submit" /><br></br><br></br>
			</form>		
            <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>

            </tr>
            </thead>
            </table>
		</div>
		<div class="col-md-3">
		</div>	
	</div>
	</div>
    );
}
  