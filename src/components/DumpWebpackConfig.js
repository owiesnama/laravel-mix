class DumpWebpackConfig {
    /**
     * The optional name to be used when called by Mix.
     * Defaults to the class name, lowercased.
     */
    name() {
        return ['dumpWebpackConfig', 'dump'];
    }

    /**
     * Register the component.
     */
    register() {
        Mix.listen('configReady', config => {
            RegExp.prototype.toJSON = function() {
                return this.toString();
            };

            console.log(JSON.stringify(config, null, 2));
        });
    }
}

module.exports = DumpWebpackConfig;
