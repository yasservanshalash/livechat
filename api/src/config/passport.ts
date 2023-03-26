import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserService from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export { JwtStrategy }; // <-- add this line

const JwtStrategys = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },

  async (payload: any, done: any) => {
    const email = payload.email;
    console.log("email is", email);
    const foundUser = await UserService.getUserByEmail(email);
    console.log("user is", foundUser);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);

// other passport strategies...

export default JwtStrategys
  // other passport strategies...;