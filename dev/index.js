import devServer from "./devServer";

let {
    PORT = 9000,
    DEV_PORT = 9090,
    HOST = 'localhost'
} = process.env,
    dev = devServer({DEV_PORT, HOST});

dev.listen(DEV_PORT, HOST, (err)=>{
    if (err){
        console.error(err);
        throw err;
    }
    console.log(`webpack dev server listening on port ${DEV_PORT}`);
});
