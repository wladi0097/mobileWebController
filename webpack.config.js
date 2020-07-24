module.exports = env => {
    console.log(`Building your stuff`);
    return require(`./webpack/webpack.${env}.js`);
};
