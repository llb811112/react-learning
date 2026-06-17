const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 如需更多别名，继续添加：
      // '@components': path.resolve(__dirname, 'src/components'),
      // '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
};