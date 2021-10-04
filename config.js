const config = process.env.NODE_ENV==="production"?{}:{
    auth_api:{
        base_url:'http://localhost:5000',
        login_route:''
    }
}