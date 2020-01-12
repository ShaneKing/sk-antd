import {Upload} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Upload.defaultProps = SK.extends(true, {}, {
  directory: false,
  disabled: false,
  listType: 'text',
  multiple: false,
  name: 'file',
  showUploadList: true,
  supportServerRender: false,
  withCredentials: false,
  openFileDialogOnClick: true,
}, Upload.defaultProps, {});

Upload.propTypes = SK.extends(true, {}, {
  //https://ant-design.gitee.io/components/upload-cn/#API
  accept: PropTypes.string,
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  directory: PropTypes.bool,
  beforeUpload: PropTypes.func,
  customRequest: PropTypes.func,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  defaultFileList: PropTypes.array,
  disabled: PropTypes.bool,
  fileList: PropTypes.array,
  headers: PropTypes.object,
  listType: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.bool,
  showUploadList: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  supportServerRender: PropTypes.bool,
  withCredentials: PropTypes.bool,
  openFileDialogOnClick: PropTypes.bool,
  onChange: PropTypes.func,
  onPreview: PropTypes.func,
  onRemove: PropTypes.func,
}, Upload.propTypes, {});

Upload.NON_SK_COMP_NAME = 'Upload';

export default class SKUpload extends AntdComp {
  static SK_COMP_NAME = 'SKUpload';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Upload.defaultProps, {
    compTag: Upload,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Upload.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKUpload.SK_COMP_NAME;
  }
}
