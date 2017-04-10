/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      name:{
          type: 'String',
          required: true
      },
      email:{
          type: 'String',
          email: true,
          required: true,
          unique: true
      },
      password:{
          type: 'String',
          required: true
      },
      lastLoggedIn:{
          type: 'Date',
          required: true,
          defaultsTo: new Date(0)
      },
      gravatarUrl:{
          type: 'String'
      }
  }
};

