import React from 'react'
import JsonData from './data.json'
function List(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr info={info.id}>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name</th>
					<th>City</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default List;

//https://www.pluralsight.com/guides/how-to-display-key-and-value-pairs-from-json-in-reactjs