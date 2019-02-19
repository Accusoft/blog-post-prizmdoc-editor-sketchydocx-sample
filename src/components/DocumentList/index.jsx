import React from "react";

class DocumentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>My Documents</th>
          </tr>
        </thead>
        <tbody>
          {this.props.documents.map((document) => {
            return (
              <tr key={document.documentId}>
                <td><a style={{cursor: 'pointer'}} onClick={() => this.props.createSession(document.documentId)}>{document.name}</a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default DocumentList;
