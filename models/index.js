
const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Comment-Post relationship
Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User-Comment relationsihp
User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post-Comment relationship
Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Export the modules
module.exports = { User, Posts, Comments };