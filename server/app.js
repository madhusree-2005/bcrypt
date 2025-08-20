import bcrypt from "bcrypt";
// bcrypt is a package which secure our passwords

const password = "Riyaz@000";

// this process will encrypte the password 
bcrypt.hash(password, 10, (err, hash) => {
    // the 10 number means how much strong the hash code should be 
  if (err) throw err;
  console.log("Hashed Password:", hash);

  // this process will compare the password
  bcrypt.compare(password, hash, (err, result) => {
    console.log("Password Match:", result);
    // if the hash code and the real password is same or not if yes it will show true if not it will show false
  });
});