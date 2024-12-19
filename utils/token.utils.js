import jsonwebtoken from "jsonwebtoken";

const tokenCreate = async (payload, expire) => {
    return jsonwebtoken.sign(payload, process.env.secret, { expiresIn: expire });
}

export default tokenCreate;
