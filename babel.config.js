module.exports = {
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                alias: {
                    components: './src/js/components',
                    svgs: './src/svgs',
                },
            },
        ],
    ],
    presets: [
        '@babel/env',
        '@babel/react',
    ],
};
