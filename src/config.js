// @todo :: Should add staging and testing env
export const ENDPOINT = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://api.ipsenh.daan.codes'; // production master branch

// 'https://staging.api.ipsenh.daan.codes' // staging master branch
// 'https://development.staging.api.ipsenh.daan.codes' // staging development branch
// 'https://testing.api.ipsenh.daan.codes' // testing master branch
// 'https://development.testing.api.ipsenh.daan.codes' // testing development branch
