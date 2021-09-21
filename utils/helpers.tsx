function debounce<Params extends any[]>(func: (...args: Params) => any, timeout: number): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

function downloadURI(uri, name) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const b64toFile = async (base64String) => {
  return fetch(base64String)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], 'File name', { type: 'image/png' });
      return file;
    });
};

function onlyUnique(value, index, self): boolean {
  return self.indexOf(value) === index;
}

export { debounce, downloadURI, b64toFile, onlyUnique };
