<?php

use \Jacwright\RestServer\RestException;

class User {
    public $username = "";
    public $password = "";
}

class TeamsList{
	public $team_id = "";
	public $pokemon_id = "";
}

class Credentials {
	public $servername = "localhost";
	public $username = "root";
	public $password = "";
	public $dbname = "poketracker";	
}

class TestController
{


    /**
     * Returns a JSON string object to the browser when hitting the root of the domain
     *
     * @url GET /
     */
    public function test()
    {
        return array("id" => "meh", "name" => null);
    }
	
	

    /**
     * Create Account
     *
     * @url POST /login
     */
    public function login()
    {
		$postdata = file_get_contents("php://input");
        $request = json_decode($postdata);

        $username = $request->username;
        $password =  $request->password;

	
        $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT * FROM user WHERE username=?")) {

			/* bind parameters for markers */
			$stmt->bind_param("s", $username);

			/* execute query */
			$stmt->execute();

			$resultset = new User();
			/* bind result variables */
			$stmt->bind_result($resultset->username, $resultset->password);

		   
			/* fetch value */
		    if (!$stmt->fetch()){
			    $stmt->close();
				return array("status" => "error","msg" => "username: " . $username . " does not exist.");
			}
			/* close statement */
			$stmt->close();
		}
		
		if (md5($password) == $resultset->password){
			return array("status" => "success","msg" => "Logged in " . $username);
		}else{
			return array("status" => "error","msg" => "Invalid password.");
		}
    }

	
	/**
     * Create Account
     *
     * @url POST /signup
     */
    public function signUp()
    {
		$postdata = file_get_contents("php://input");
        $request = json_decode($postdata);

        $username = $request->username;
        $password =  $request->password;

	
        $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT * FROM user WHERE username=?")) {

			/* bind parameters for markers */
			$stmt->bind_param("s", $username);

			/* execute query */
			$stmt->execute();

			$resultset = new User();
			/* bind result variables */
			$stmt->bind_result($resultset->username, $resultset->password);

		   
			/* fetch value */
		    if ($stmt->fetch()){
			    $stmt->close();
				return array("status" => "error","msg" => "username: " . $username . " already exists.");
			}
			/* close statement */
			$stmt->close();
		}
		
		/* create a prepared statement */
		if ($stmt = $conn->prepare("INSERT INTO user VALUE(?,?)")) {

			/* bind parameters for markers */
			$stmt->bind_param("ss", $username, md5($password));

			/* execute query */
			
 
			/* fetch value */
		    if (!$stmt->execute()){
			    $stmt->close();
				return array("status" => "error","msg" => "There was an error when creating the account");
			}
			/* close statement */
			$stmt->close();
		}
		
        return array("status" => "success","msg" => "Logged in " . $username);
    }


    /**
     * Gets the user by id or current user
     *
     * @url GET /team/$id
     */
    public function getTeam($id)
    {		
	     $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$result = array();
		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT t.team_id, p.pokemon_id FROM team as t INNER JOIN pokemon as p ON t.team_id = p.team_id WHERE t.team_id=? ORDER BY t.team_id")) {

			/* bind parameters for markers */
			$stmt->bind_param("s", $id);

			/* execute query */
			$stmt->execute();

			$resultset = new TeamsList();
			/* bind result variables */
			$stmt->bind_result($resultset->team_id, $resultset->pokemon_id);
		   
			/* fetch value */
			$lastTeamId = -1;
			$index = -1;
		    while($stmt->fetch()){
		    	
		    	array_push($result, array("team_id" => $resultset->team_id, "pokemon_id" => $resultset->pokemon_id, "order" => ""));
		    }

			/* close statement */
			$stmt->close();
		}

		return $result;
	}


    /**
     * Gets the user by id or current user
     *
     * @url GET /teams/$username
     */
    public function getTeams($username)
    {		
	     $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$result = array();
		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT t.team_id, p.pokemon_id FROM team as t INNER JOIN pokemon as p ON t.team_id = p.team_id WHERE t.username=? ORDER BY t.team_id")) {

			/* bind parameters for markers */
			$stmt->bind_param("s", $username);

			/* execute query */
			$stmt->execute();

			$resultset = new TeamsList();
			/* bind result variables */
			$stmt->bind_result($resultset->team_id, $resultset->pokemon_id);
		   
			/* fetch value */
			$lastTeamId = -1;
			$index = -1;
		    while($stmt->fetch()){
		    	if($resultset->team_id != $lastTeamId){
		    		$lastTeamId = $resultset->team_id;
		    		array_push($result, array());
		    		$index++; 
		    	}
		    	array_push($result[$index], array("team_id" => $resultset->team_id, "pokemon_id" => $resultset->pokemon_id));
		    }

			/* close statement */
			$stmt->close();
		}

		return $result;
	}


		/**
     * Create Account
     *
     * @url GET /createTeam/$username
     */
    public function createTeam($username)
    {

	
        $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$result = -1;
		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT MAX(team_id) FROM team")) {

			/* bind parameters for markers */
			//$stmt->bind_param("s", $username);

			/* execute query */
			$stmt->execute();

			$resultset = new User();
			/* bind result variables */
			$stmt->bind_result($result);

			/* fetch value */
		    $stmt->fetch();
			/* close statement */
			$stmt->close();
		}
		
		$result++;

		/* create a prepared statement */
		if ($stmt = $conn->prepare("INSERT INTO team VALUES(?,?)")) {

			/* bind parameters for markers */
			$stmt->bind_param("si",$username,$result);

			/* execute query */
			
 
			/* fetch value */
		    if (!$stmt->execute()){
			    $stmt->close();
				return array("status" => "error","msg" => "There was an error when creating the team");
			}
			/* close statement */
			$stmt->close();
		}
		
        return array("status" => "success","team_id" => $result);
    }


	

		/**
     * Create Account
     *
     * @url GET /insertInTeam/$teamId/$pokemonId
     */
    public function insertInTeam($teamId,$pokemonId)
    {

	
        $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		/* create a prepared statement */
		if ($stmt = $conn->prepare("INSERT INTO pokemon VALUES(?,?)")) {

			/* bind parameters for markers */
			$stmt->bind_param("ii", $pokemonId,$teamId);

			/* execute query */
			
 
			/* fetch value */
		    if (!$stmt->execute()){
			    $stmt->close();
				return array("status" => "error","msg" => "There was an error when inserting into the team");
			}
			/* close statement */
			$stmt->close();
		}
		
        return array("status" => "success","msg" => "pkemon inserted successfully");
    }


   

    	/**
     * Create Account
     *
     * @url GET /insertStat/$username/$userTeamId/$foeTeamId/$battleResult/$pokemonId1/$pokemonId2/$pokemonId3/$pokemonId4
     */
    public function insertStat($username, $userTeamId, $foeTeamId,$battleResult,$pokemonId1,$pokemonId2,$pokemonId3,$pokemonId4)
    {

	
        $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 


		$result = -1;
		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT MAX(stat_id) FROM statistic")) {

			/* bind parameters for markers */
			//$stmt->bind_param("s", $username);

			/* execute query */
			$stmt->execute();

			/* bind result variables */
			$stmt->bind_result($result);

			/* fetch value */
		    $stmt->fetch();
			/* close statement */
			$stmt->close();
		}
		
		$result++;



		/* create a prepared statement */
		if ($stmt = $conn->prepare("INSERT INTO statistic VALUES(?,?,?,?,?,?,?,?,?)")) {

			/* bind parameters for markers */
			$stmt->bind_param("isiisiiii", $result, $username, $userTeamId, $foeTeamId,$battleResult,$pokemonId1,$pokemonId2,$pokemonId3,$pokemonId4);

			/* execute query */
			
 
			/* fetch value */
		    if (!$stmt->execute()){
			    $stmt->close();
				return array("status" => "error","msg" => "There was an error when inserting into the stats");
			}
			/* close statement */
			$stmt->close();
		}
		
        return array("status" => "success","msg" => "stat inserted successfully");
    }




}