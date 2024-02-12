import { Configuration as Config } from 'webpack'
import { Configuration as DevServerConfig } from 'webpack-dev-server'
import { merge } from 'webpack-merge'
import { webpackCommon } from './webpack.common'

const webpackDev: Config | DevServerConfig = merge(webpackCommon, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        compress: true,
    },
})

export default webpackDev
