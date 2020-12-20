const express = require('express')
const router = express()
const path =  require('path')


if(process.env.NODE_ENV === 'production'){
  router.use('/dist', express.static(path.join(__dirname, '../dist')));
}

 router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

module.exports  = router;