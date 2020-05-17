const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

   entry: {
     app: ["babel-polyfill", "./src/index.js"]
	  // app: __dirname + "/src"
   },
  output: {
    filename: "[name]-bundle.js",
    path: __dirname + "./public"
	  // path: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/app.html",
      filename: "./app.html"
    })
  ]
};