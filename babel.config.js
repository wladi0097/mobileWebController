module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [["@babel/plugin-transform-react-jsx", {
            "pragma": "h",
            "pragmaFrag": "Fragment",
        }], 'transform-class-properties']
    }
}
