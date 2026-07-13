const requests = {};

function rateLimiter(req, res, next) {
  const ip = req.ip;

  if (!requests[ip]) {
    requests[ip] = {
      count: 1,
      start: Date.now()
    };
    return next();
  }

  const diff = Date.now() - requests[ip].start;

  if (diff > 60000) {
    requests[ip] = {
      count: 1,
      start: Date.now()
    };
    return next();
  }

  if (requests[ip].count >= 100) {
    return res.status(429).send("Too many requests");
  }

  requests[ip].count++;
  next();
}