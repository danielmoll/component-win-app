function removeMetaNodes() {
  if (typeof document !== 'undefined') {
    const nodes = document.querySelectorAll('meta[data-meta="true"]');
    Array.prototype.slice.call(nodes).forEach((node) => {
      node.parentNode.removeChild(node);
    });
  }
}

function insertMetaNode(tag) {
  const newNode = document.createElement('meta');
  for (const property in tag) {
    if (tag.hasOwnProperty(property)) {
      newNode.setAttribute(property, tag[property]);
    }
  }
  newNode.setAttribute('data-meta', 'true');
  document.getElementsByTagName('head')[0].appendChild(newNode);
}

function insertMetaNodes(tags) {
  if (typeof document !== 'undefined') {
    Array.prototype.slice.call(tags).forEach((tag) => {
      insertMetaNode(tag);
    });
  }
}

export default function (metadata) {
  removeMetaNodes();
  insertMetaNodes(metadata);
}
