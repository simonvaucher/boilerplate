require("dotenv").config({ path: __dirname + "/../.env" });

const Sequelize = require("sequelize");
const UserModel = require("./models/user");
const BlogModel = require("./models/blog");
const TagModel = require("./models/tag");

const sequelize = new Sequelize(process.env.BOILERPLATE_CONN_STRING, {
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// const sequelize = new Sequelize(
//   process.env.BOILERPLATE_DB,
//   process.env.BOILERPLATE_USER,
//   process.env.BOILERPLATE_PASS,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   }
// );

const User = UserModel(sequelize, Sequelize);

// Each one of these is a table
const BlogTag = sequelize.define("blog_tag", {});
// BlogModel and TagModel are just functions that calls sequelize.define()
// So essentialy, just a neat code separation.
const Blog = BlogModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);

// Will create a FK in BlogTag model - yeah, magic :/
Blog.belongsToMany(Tag, { through: BlogTag, unique: false });
// Will creater a FK
Tag.belongsToMany(Blog, { through: BlogTag, unique: false });
Blog.belongsTo(User);

// Using force: true WILL ALWAYS DELETE THE TABLES AND RECREATE THEM
// sequelize.sync({ force: true }).then(() => {
//   console.log(`Database & tables created via Sequelize`);
// });

// When using force: false => columns will be created only on demand
sequelize.sync({ force: false }).then(() => {
  console.log(`Database synced via Sequelize`);
});

module.exports = {
  User,
  Blog,
  Tag,
};
