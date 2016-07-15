Authentication using JSON Web Token (jwt) in node.js
=======

uthentication is one of the big part of any application. JSON web token is one of the safest medium of transferring information between two parties. The token is a long encryped string that has 3 parts-

The headers  - It contains the header information
The paylod - It contains the actual information such the user json object and
The signature - It is a cryptographic signature



Usage:

jwt.sign(payload, secretOrPrivateKey, options, [callback])

payload:

{
    _id: "adnasdaasdjasdh",
    name: "dinesh rawat",
    email: "dinesh.rawat@evontech.com"
}

secretOrPrivateKey:

It could be anything that is used to make a hash
ex:-

"mysupersecretkey"

options:

algorithm (default: HS256)
expiresIn: expressed in seconds or a string describing a time span rauchg/ms. Eg: 60, "2 days", "10h", "7d"
notBefore: expressed in seconds or a string describing a time span rauchg/ms. Eg: 60, "2 days", "10h", "7d"
audience
issuer
jwtid
subject
noTimestamp
header
