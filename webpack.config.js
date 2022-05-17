const path = require('path');
const webpack = require("webpack");

module.exports = {
    
    resolve: {
        alias: {
            "@Pages": path.resolve(__dirname, 'cypress/pages'),
            "@Validation": path.resolve(__dirname, 'cypress/integration/validation'),
            "@Fixtures": path.resolve(__dirname, 'cypress/fixtures'),
            "@Integration": path.resolve(__dirname, 'cypress/integration'),
            "@FormAuthenticationSelector": path.resolve(__dirname, 'cypress/pages/formAuthenticationPage')

        },
        fallback: {
            path: require.resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: 'cypress-cucumber-preprocessor/loader'
                    }
                ]

            },
            {
                test: /\.features$/,
                use: [
                    {
                        loader: 'cypress-cucumber-preprocessor/lib/featureLoader'
                    }
                ]

            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
}