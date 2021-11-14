# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

   - A token is at the very basic sense a breadcrumb - it is a one way function that authenticates a user based on industry standard encryption. It is the way in which the browser is able to continuously recognize a session by the user and device. When you login to a website, a token is generated (technically) by the browser for which it processes checks. This token is placed on the devices' localStorage (within the browser) and is used for conditional statments like the below.

2. What steps can you take in your web apps to keep your data secure?

   -  More specifically, with regards to tokens (and sercret passphrases), we use Redirects through Protected/PrivateRoute 's. We didnt really go through the {...rest} object very much (but it seems like it has to do with the JWT information), but we can use a conditional statements to say, "if x device requesting access has the token that matches, send them on => if NOT then push the client to a separate page so that things cant be retrieved.

   - tokens also CHANGE based on the session - unique from one session to the other. Encryptions also allow for us to get personal information retrieved, if a token is intercepted. I assume you can put other instances of 'flush' if you wanted to too

3. Describe how web servers work.

   - Web servers are basically

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

   - C: create - axios post - creates data onto the server which didnt already exist ( usually used to post user entered data from a form )
   - R: read - axios.get - reads data from the server/api (used to set datums which are coming from the API)
   - U: update - axios.put - updates data that already exists on the server (usually used for editing data)
   - D: delete - axios.delete - deletes data from the server/api
