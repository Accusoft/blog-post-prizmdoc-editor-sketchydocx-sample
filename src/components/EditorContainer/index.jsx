import React from "react";

class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.sessionId) {
      return (
        <div>
          Select a document to open an editor!
        </div>
      );
    }
    const href = `${this.props.apiRoot}/?sessionId=${this.props.sessionId}`;
    return (
      <iframe style={{width: '100%', height: '100%'}} src={href} />
    );
  }
};

export default EditorContainer;
