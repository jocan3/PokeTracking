<?php

use \Jacwright\RestServer\RestException;

class User {
    public $username = "";
    public $password = "";
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
     * @url GET /user/$id
     */
    public function getUser($id)
    {		
	    $c = new Credentials();
		
		// Create connection
		$conn = new mysqli($c->servername, $c->username, $c->password, $c->dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$result = null;
		/* create a prepared statement */
		if ($stmt = $conn->prepare("SELECT * FROM user WHERE username=?")) {

			/* bind parameters for markers */
			$stmt->bind_param("s", $id);

			/* execute query */
			$stmt->execute();

			$resultset = new User();
			/* bind result variables */
			$stmt->bind_result($resultset->username, $resultset->password);

		   
			/* fetch value */
		    $stmt->fetch();

			/* close statement */
			$stmt->close();
		}

		return array("username" => $resultset->username, "password" => $resultset->password);
	}

}