const http = new EasyHTTP;

// Get users
/* http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err)); */

const data = {
    name: "Jake Clayton",
    username: "JakeC",
    email: "Jake@GoldCoastMaids.com.au"
}

// Post new user
/* http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// Update user
/* http.put("https://jsonplaceholder.typicode.com/users/2", data)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// Delete user
http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(err));