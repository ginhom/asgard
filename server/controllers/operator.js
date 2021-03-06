// Generated by CoffeeScript 1.3.3
(function() {
  var OperatorsModel, content, operators_model, setMember;

  operators_model = require('../model/operators-model');

  OperatorsModel = operators_model.OperatorsModel;

  content = require('./content');

  exports.getoperators = function(req, res, contents, pv, callback) {
    var random;
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_findall_success', function(result) {
      return callback(req, res, {
        contents: contents,
        pv: pv,
        operators: result
      });
    });
    operators_model.once(random + '_operators_findall_error', function(err) {
      return console.log('_operators_findall_error = ' + err);
    });
    return operators_model.findAll(OperatorsModel, random);
  };

  exports.add = function(req, res) {
    var obj, random;
    console.log('req.body.username   = ' + req.body.username);
    console.log('req.body.password   = ' + req.body.password);
    console.log('req.body.alias      = ' + req.body.alias);
    console.log('req.body.email      = ' + req.body.email);
    console.log('req.body.role       = ' + req.body.role);
    obj = new OperatorsModel();
    obj.username = req.body.username;
    obj.password = req.body.password;
    obj.alias = req.body.alias;
    obj.email = req.body.email;
    obj.role = req.body.role;
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_add_success', function(result) {
      console.log('_operators_add_success = ' + result);
      return res.redirect('/dashboard');
    });
    operators_model.once(random + '_operators_add_error', function(err) {
      return console.log('_operators_add_error = ' + err);
    });
    return operators_model.add(obj, random);
  };

  exports.edit = function(req, res) {
    var random;
    console.log('req.params.username = ' + req.params.username);
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_findusername_success', function(result) {
      return res.render('back-end/operator-modal', {
        operator: result
      });
    });
    operators_model.once(random + '_operators_findusername_error', function(err) {
      return console.log('_operators_findusername_error = ' + err);
    });
    return operators_model.findUsername(OperatorsModel, req.params.username, random);
  };

  exports.save = function(req, res) {
    var random, updates;
    console.log('req.body.username   = ' + req.body.username);
    console.log('req.body.orgusername= ' + req.body.orgusername);
    console.log('req.body.password   = ' + req.body.password);
    console.log('req.body.alias      = ' + req.body.alias);
    console.log('req.body.email      = ' + req.body.email);
    console.log('req.body.role       = ' + req.body.role);
    random = require('../libs/random').random;
    updates = {
      username: req.body.username,
      password: req.body.password,
      alias: req.body.alias,
      email: req.body.email,
      role: req.body.role,
      mdate: new Date()
    };
    operators_model.once(random + '_operators_save_success', function(result) {
      if (req.body.username === req.body.orgusername) {
        return res.redirect('/dashboard');
      } else {
        return content.updateUsername(req, res, req.body.orgusername, req.body.username);
      }
    });
    operators_model.once(random + '_operators_save_error', function(err) {
      return console.log('_operators_save_error = ' + err);
    });
    return operators_model.save(OperatorsModel, req.body.orgusername, updates, random);
  };

  exports["delete"] = function(req, res) {
    var random;
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_delete_success', function(result) {
      console.log('_operators_delete_success = ' + result);
      return res.render('back-end/success');
    });
    operators_model.once(random + '_operators_delete_error', function(err) {
      return console.log('_operators_delete_error = ' + err);
    });
    return operators_model["delete"](OperatorsModel, req.params.username, random);
  };

  exports.checkunique = function(req, res) {
    var random;
    console.log('req.params.username = ' + req.params.username);
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_findusername_success', function(result) {
      console.log('_operators_findusername_success =' + result + '|');
      if (result == '' || result == null) {
        return res.render('back-end/success');
      } else {
        return res.render('back-end/unsuccess');
      }
    });
    operators_model.once(random + '_operators_findusername_error', function(err) {
      return console.log('_operators_findusername_error = ' + err);
    });
    return operators_model.findUsername(OperatorsModel, req.params.username, random);
  };

  exports.profile = function(req, res) {
    var random, updates;
    console.log('req.body.username   = ' + req.body.username);
    console.log('req.body.password   = ' + req.body.password);
    console.log('req.body.alias      = ' + req.body.alias);
    console.log('req.body.email      = ' + req.body.email);
    console.log('req.body.role       = ' + req.body.role);
    random = require('../libs/random').random;
    updates = {
      username: req.body.username,
      password: req.body.password,
      alias: req.body.alias,
      email: req.body.email,
      role: req.body.role,
      mdate: new Date()
    };
    operators_model.once(random + '_operators_save_success', function(result) {
      console.log('_operators_save_success =' + result);
      return res.redirect('/operator-profile');
    });
    operators_model.once(random + '_operators_save_error', function(err) {
      return console.log('_operators_save_error = ' + err);
    });
    return operators_model.save(OperatorsModel, req.body.username, updates, random);
  };

  exports.updateprofile = function(req, res) {
    var member, random;
    member = setMember(req, res);
    console.log('member.username = ' + member.username);
    random = require('../libs/random').random;
    operators_model.once(random + '_operators_findusername_success', function(result) {
      console.log('_operators_findusername_success =' + result);
      if (req.session.member != null) {
        req.session.member = JSON.stringify(result);
      }
      res.cookie('member', JSON.stringify(result));
      return res.redirect('/dashboard');
    });
    operators_model.once(random + '_operators_findusername_error', function(err) {
      return console.log('_operators_findusername_error = ' + err);
    });
    return operators_model.findUsername(OperatorsModel, member.username, random);
  };

  setMember = function(req, res) {
    var member;
    member = req.session.member ? req.session.member : req.cookies.member;
    return member = JSON.parse(member);
  };

}).call(this);
