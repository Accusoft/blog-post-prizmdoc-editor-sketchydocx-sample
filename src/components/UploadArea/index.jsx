import React from "react";
import Dropzone from 'react-dropzone';

class UploadArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropzone
        multiple={false}
        onDrop={this.props.uploadDocument}
        accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      >
        {({ getInputProps, getRootProps }) => {
          return (
            <fieldset
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <div>
                <i className="icon-cloud-upload"></i><br />
                Drop your document here<br />
                <span>or click to browse</span>
              </div>
            </fieldset>
          );
        }}
      </Dropzone>
    )
  }
};

export default UploadArea;
