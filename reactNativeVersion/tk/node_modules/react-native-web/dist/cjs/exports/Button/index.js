"use strict";

exports.__esModule = true;
exports.default = Button;

var _StyleSheet = _interopRequireDefault(require("../StyleSheet"));

var _TouchableOpacity = _interopRequireDefault(require("../TouchableOpacity"));

var _Text = _interopRequireDefault(require("../Text"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function Button(props) {
  var accessibilityLabel = props.accessibilityLabel,
      color = props.color,
      disabled = props.disabled,
      onPress = props.onPress,
      testID = props.testID,
      title = props.title;
  return _react.default.createElement(_TouchableOpacity.default, {
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    disabled: disabled,
    onPress: onPress,
    style: [styles.button, color && {
      backgroundColor: color
    }, disabled && styles.buttonDisabled],
    testID: testID
  }, _react.default.createElement(_Text.default, {
    style: [styles.text, disabled && styles.textDisabled]
  }, title));
}

var styles = _StyleSheet.default.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
});

module.exports = exports.default;