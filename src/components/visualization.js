import {useHistory } from 'react-router-dom';


const Visualization = (props) => {
	const history=useHistory();
	const handleClick=()=>{
		history.push('/github-rest-api-v3/compare');
	}
	return(
		
		props.data ? 
		
		<div>
			<img src={props.data.profile.avatar_url} style={{width:"100px",height:"100px",borderRadius:"50%"}}/>		
			<h2>{props.data && props.data.profile.name}</h2>
			<div className="row">
				<div className="col-sm">
					<h4>Total Repos: {props.data && props.data.repos.length}</h4>					
					<table className="table table-responsive">
						<thead>
							<tr>
								<th>S.No</th>
								<th>Name of the Repo</th>
								<th>Open Issues</th>
								<th>Stars</th>
								<th>Forks</th>
							</tr>
							

						</thead>
						<tbody>
						{props.data && props.data.repos.map((key,index)=>{
							
							return(<tr>
								<td>{index}</td>
								<td><a href={key.html_url}>{key.name}</a></td>
								<td><a href={key.html_url+'/issues'}>{key.open_issues_count}</a></td>
								<td>{key.stargazers_count}</td>
								<td>{key.forks_count}</td>
							</tr>)

						})}
						</tbody>
					</table>
					

				</div>
				<div className="col-sm">
					<h4>Total Following :{props.data && props.data.following.length}</h4>
					<table className="table table-responsive">
						<thead>
							<tr>
								<th>S.No</th>
								<th>User</th>
								<th>Name</th>
							</tr>

						</thead>
						<tbody>
							{props.data && props.data.following.map((key,index)=>{
								return(
									<tr>
										<td>{index}</td>
										<td><img src={key.avatar_url} style={{width:"40px",height:"40px"}}/></td>
										<td><a href={key.html_url}>{key.login}</a></td>
									</tr>
								)
							})}

						</tbody>
					</table>

					<h4>Total Followers: {props.data && props.data.followers.length}</h4>
					<table className="table table-responsive">
						<thead>
							<tr>
								<th>S.No</th>
								<th>User</th>
								<th>Name</th>
							</tr>

						</thead>
						<tbody>
							{props.data && props.data.followers.map((key,index)=>{
								return(
									<tr>
										<td>{index}</td>
										<td><img src={key.avatar_url} style={{width:"40px",height:"40px"}}/></td>
										<td><a href={key.html_url}>{key.login}</a></td>
									</tr>
								)
							})}

						</tbody>
					</table>
					
					
				</div>
				
			</div>
			
		</div>
		:
		<div class="jumbotron">
		<h1 class="display-4">Hey, User!</h1>
		<p class="lead">Please Enter Your Username For Getting Stats!</p>
		<hr class="my-4"></hr>
		<p>If You Wanna Compare Yourself?</p>
		<p class="lead">
		  <a class="btn btn-success btn" onClick={handleClick} role="button">Click Here</a>
		</p>
		
	  	</div>
		  
	  

	);
	 // TODO
}

export default Visualization;