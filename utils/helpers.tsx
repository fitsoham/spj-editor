function debounce(func, wait) {
    let timeout;
    return function x(...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}


export { debounce };