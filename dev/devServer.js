import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

export default function({DEV_PORT, HOST}){
    let publicPath = `http://${HOST}:${DEV_PORT}/build/`
    , compiler = webpack({
        cache: true,
        debug: true,
        devtool: "cheap-module-source-map",
        entry: {
            bundle: [
                `webpack-dev-server/client?http://${HOST}:${DEV_PORT}`,
                "webpack/hot/only-dev-server",
                "./src/client.js"
            ]
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader?optional[]=runtime&stage=1"],
                test: /\.jsx?$/
            }]
        },
        output: {
            filename: "[name].js",
            path: path.join(__dirname, "/build/"),
            publicPath: publicPath
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        resolve: {
            extensions: ["", ".js", ".jsx"]
        }
    })
    , config = {
        contentBase: `http://${HOST}:${DEV_PORT}`,
        hot: true,
        quiet: false,
        noInfo: true,
        publicPath: publicPath,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    };

    return new WebpackDevServer(compiler, config);
}
