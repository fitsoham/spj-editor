const blurredBg = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAATAB4DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYHCP/EACgQAAIBAwMEAgEFAAAAAAAAAAECAwQFEQAGIQcSEzEIIhRBUWGRsf/EABcBAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAlEQABAgMIAwEAAAAAAAAAAAABAAIDBBEFEhMhIkFRYTGx8bL/2gAMAwEAAhEDEQA/AEjprbOmly2nf9wbhvFUKSCphoaV6aNjK1Q6ElFijDs5DA+s/VcnAzhE6P2O5bm6n7dtctW8EM11SKYVSHtZAys0ZGPqxXIwR7IzgZ1avi3si5w0dZt247WhvDVcM1Q8UjRD8YL2+ORk9nJ7+Rk5bDHgZs+3PhgLfLtncddcb7FUUEkDmgNdFGyxx5dYi6MGXB4yrDHdxjGdEBESrr2n6lkYVARq+JC2P0Ft28Jam/1t7nnsyiV4bZVxiOpgnjVz2q4GHjPGSORx+4JdPkNaLDsrbNiprVBS26kLnuKMMs/fOMMxOWYKqDk5+ul0Vu4htQ1FrtsIu9ir7lbJPJIrs9GZWV0UPJ9pR2QEkfZwqhc/rCbPfa6+7eqqDcdreshirFlElTGFDyjyKXAfB5Ts9Eg4z7zos1GwHXIYvZc5nLtV1eWYlPJWutsbat21r7tKW0wvb5L1Q3CK4NBM486qaYKDzxjyP6x7/gavF6+P+xahUea01MrA5HkulW3+y6NGkSrGmSgkjZSmHuE1Fod1Pfjxty3WW+9WKKip/DTW/cDw0qd7HxoYY2IySScnnnOs+dcUWruFyoJVBpFu0sgjUdv2AIByOfTH+9GjWbawDYzCBx+U+zCTCeD37X//2Q==';

const blurredProduct = 'data:image/png;base64,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'

export { blurredBg, blurredProduct };
