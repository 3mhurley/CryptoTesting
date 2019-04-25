const cryptoRandomString = require("crypto-random-string")

// Crypto
let cryptoID = cryptoRandomString(10)

// Mongoose
User.count({ _id: cryptoID }, function(err, count) {
	if (count > 0) {
		//document exists });
	}
})
