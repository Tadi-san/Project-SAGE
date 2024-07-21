
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../../../config/prisma_config');
const saltRounds = 10;
const secretKey = process.env.JWT_SECRET;

class AuthController {
  async register(req, res) {
    const {
      username,
      email,
      password,
      phone_number,
      photo,
    } = req.body;
    try {
      // Check if the username or email already exists
      const existingUser = await prisma.management.findFirst({
        where: { OR: [{ username }, { email }] },
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: 'Username or email already exists.' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create the user
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          phone_number,
          photo,
        },
      });

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, secretKey);

      res.json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to register.' });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      // Find the user by username
      const user = await prisma.user.findUnique({
        where: { email },
       
      });

      // Check if the user exists
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }

      // Compare the password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }

      // Generate JWT token
      const token = jwt.sign({type:'user', userId: user.id }, secretKey);

      res.json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to login.' });
    }
  }
}

module.exports = new AuthController();
