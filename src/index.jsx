import React from "react";
import ReactDOM from "react-dom";

import UploadArea from './components/UploadArea';
import DocumentList from './components/DocumentList';
import EditorContainer from './components/EditorContainer';

import config from './config.json';

class SketchyDocx extends React.Component {
  constructor(props) {
    super(props);

    this.uploadDocument = this.uploadDocument.bind(this);
    this.createSession = this.createSession.bind(this);

    this.state = { documents: []}
  }

  uploadDocument(files) {
    fetch(`${config.apiRoot}/api/v1/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      },
      body: files[0]
    }).then(response => response.json())
      .then(success => {
        this.setState({ documents: [ ...this.state.documents, { name: files[0].name, documentId: success.documentId }]})
      })
      .catch(error => console.error(error));
  }

  createSession(documentId) {
    fetch(`${config.apiRoot}/api/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        documentId
      })
    }).then(response => response.json())
      .then(success => {
        this.setState({
          sessionId: success.sessionId
        });
      })
      .catch(error => console.error(error))
  }

  render() {
    const { documents, sessionId } = this.state;
    return (
      <div>
        <h1>SketchyDocx</h1>
        <div style={{ display: 'flex', alignItems: 'stretch', height: '85vh'}}>
          <nav style={{ paddingRight: '15px'}}>
            <UploadArea uploadDocument={this.uploadDocument} />
            <DocumentList createSession={this.createSession} documents={documents} />
          </nav>
          <main style={{flexGrow: 2}}>
            <EditorContainer apiRoot={config.apiRoot} sessionId={sessionId} />
          </main>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<SketchyDocx />, mountNode);