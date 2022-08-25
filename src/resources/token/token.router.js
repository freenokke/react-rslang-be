const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });

const tokenService = require('./token.service');

router.get('/', async (req, res) => {
  const tokens = await tokenService.refresh(req.userId, req.tokenId);
  res.status(OK).send(tokens);
});
router.get('/check', async (req, res) => {
  const isExpired = await tokenService.isTokenExpired(req.userId, req.tokenId);
  res.status(OK).send(isExpired);
});

module.exports = router;
