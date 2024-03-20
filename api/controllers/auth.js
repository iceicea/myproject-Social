import { db } from '../connect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = (req, res) => {
  //用户是否存在
  const q = 'SELECT * FROM users WHERE username = ?';
  //通过query隐式建立连接, 后续可以考虑使用连接池pool管理
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    // console.log(data);
    //RowDataPacket
    if (data.length) return res.status(409).json('User already exists!');
    //创建用户
    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const q =
      'INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)';
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      // console.log(data);
      //OkPacket

      if (err) return res.status(500).json(err);
      return res.status(200).json('User has been created.');
    });
  });
};
export const login = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?';
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json('User not found!');
    //数据量小 使用同步方法更方便 bcrypt.compare是异步方法 数据量大时可能会阻塞事件循环
    const checkPasswrod = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPasswrod)
      return res.status(400).json('Wrong password or username!');
    const token = jwt.sign({ id: data[0].id }, 'secretkey');
    const { password, ...others } = data[0];
    res
      .cookie('accessToken', token, {
        httpOnly: true, //仅web服务器可以访问
      })
      .status(200)
      .json(others);
  });
  // console.log(req.cookies);
};
export const logout = (req, res) => {
  res
    .clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json('User has been logged out.');
};
