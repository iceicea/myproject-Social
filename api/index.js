import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import relationshipRoutes from './routes/relationships.js';
const app = express();

//中间件（Middleware）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
// 允许源的请求
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
//cookie 解析中间件函数
app.use(cookieParser());

const storage = multer.diskStorage({
  // 设置文件存储的目的地
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  //文件名
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
//创建multer实例
const upload = multer({ storage: storage });

//使用multer中间件处理文件上传
app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  res.status(200).json(file.filename);
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/relationships', relationshipRoutes);

app.listen(8800, () => {
  console.log('API working!');
});
